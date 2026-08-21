const bcrypt = require('bcrypt');
const { pool } = require('../config/db');
const AppError = require('../utils/AppError');

const getEnrolledStudents = async () => {
  const [rows] = await pool.query(`
    SELECT s.reg_no, s.name, s.mobile_no, u.email, c.course_id, c.course_name,
           e.enrollment_id, e.enrolled_at, e.status
    FROM enrollments e
    INNER JOIN students s ON s.reg_no = e.reg_no
    INNER JOIN users u ON u.user_id = s.user_id
    INNER JOIN courses c ON c.course_id = e.course_id
    ORDER BY e.enrollment_id DESC
  `);

  return rows;
};

const registerStudentToCourse = async (userId, courseId) => {
  const [studentRows] = await pool.query('SELECT reg_no FROM students WHERE user_id = ?', [userId]);

  if (!studentRows.length) {
    throw new AppError(404, 'Student profile not found');
  }

  const regNo = studentRows[0].reg_no;

  const [courseRows] = await pool.query('SELECT * FROM courses WHERE course_id = ?', [courseId]);
  if (!courseRows.length) {
    throw new AppError(404, 'Course not found');
  }

  const [existing] = await pool.query(
    'SELECT * FROM enrollments WHERE reg_no = ? AND course_id = ?',
    [regNo, courseId]
  );

  if (existing.length) {
    throw new AppError(409, 'Student is already enrolled in this course');
  }

  const [result] = await pool.query(
    'INSERT INTO enrollments (reg_no, course_id, enrolled_at, status) VALUES (?, ?, NOW(), ?)',
    [regNo, courseId, 'active']
  );

  const [rows] = await pool.query('SELECT * FROM enrollments WHERE enrollment_id = ?', [result.insertId]);
  return rows[0];
};

const changeStudentPassword = async (userId, currentPassword, newPassword) => {
  const [rows] = await pool.query('SELECT * FROM users WHERE user_id = ?', [userId]);

  if (!rows.length) {
    throw new AppError(404, 'User not found');
  }

  const user = rows[0];
  const isMatch = await bcrypt.compare(currentPassword, user.password);

  if (!isMatch) {
    throw new AppError(400, 'Current password is incorrect');
  }

  const hashed = await bcrypt.hash(newPassword, 10);
  await pool.query('UPDATE users SET password = ? WHERE user_id = ?', [hashed, userId]);

  return { message: 'Password updated successfully' };
};

const getStudentCourses = async (userId) => {
  const [studentRows] = await pool.query('SELECT reg_no FROM students WHERE user_id = ?', [userId]);
  if (!studentRows.length) {
    throw new AppError(404, 'Student profile not found');
  }

  const regNo = studentRows[0].reg_no;

  const [rows] = await pool.query(
    `SELECT c.*
     FROM enrollments e
     INNER JOIN courses c ON c.course_id = e.course_id
     WHERE e.reg_no = ? AND e.status = 'active'
     ORDER BY e.enrollment_id DESC`,
    [regNo]
  );

  return rows;
};

const getStudentCourseWithVideos = async (userId, courseId) => {
  const [studentRows] = await pool.query('SELECT reg_no FROM students WHERE user_id = ?', [userId]);
  if (!studentRows.length) {
    throw new AppError(404, 'Student profile not found');
  }

  const regNo = studentRows[0].reg_no;

  const [enrollmentRows] = await pool.query(
    `SELECT e.*, c.*
     FROM enrollments e
     INNER JOIN courses c ON c.course_id = e.course_id
     WHERE e.reg_no = ? AND e.course_id = ? AND e.status = 'active'`,
    [regNo, courseId]
  );

  if (!enrollmentRows.length) {
    throw new AppError(403, 'You are not enrolled in this course');
  }

  const [videoRows] = await pool.query(
    `SELECT v.*
     FROM videos v
     WHERE v.course_id = ?
     ORDER BY v.video_id ASC`,
    [courseId]
  );

  const expiresAt = new Date(enrollmentRows[0].enrolled_at);
  expiresAt.setDate(expiresAt.getDate() + enrollmentRows[0].video_expire_days);
  const isAccessExpired = new Date() > expiresAt;

  return {
    course: {
      ...enrollmentRows[0],
      accessExpired: isAccessExpired,
      expires_at: expiresAt.toISOString(),
    },
    videos: videoRows.map((video) => ({
      ...video,
      accessExpired: isAccessExpired,
      expires_at: expiresAt.toISOString(),
    })),
  };
};

module.exports = {
  getEnrolledStudents,
  registerStudentToCourse,
  changeStudentPassword,
  getStudentCourses,
  getStudentCourseWithVideos,
};
