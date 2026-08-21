const { pool } = require('../config/db');
const AppError = require('../utils/AppError');

const getActiveCourses = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM courses WHERE end_date >= CURDATE() ORDER BY course_id DESC'
  );

  return rows;
};

const getAllCourses = async () => {
  const [rows] = await pool.query('SELECT * FROM courses ORDER BY course_id DESC');
  return rows;
};

const addCourse = async (courseData) => {
  const { course_name, description, fees, start_date, end_date, video_expire_days } = courseData;

  const [result] = await pool.query(
    `INSERT INTO courses (course_name, description, fees, start_date, end_date, video_expire_days)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [course_name, description || null, fees, start_date, end_date, video_expire_days]
  );

  const [rows] = await pool.query('SELECT * FROM courses WHERE course_id = ?', [result.insertId]);
  return rows[0];
};

const updateCourse = async (courseId, courseData) => {
  const current = await getCourseById(courseId);

  const payload = {
    course_name: courseData.course_name ?? current.course_name,
    description: courseData.description ?? current.description,
    fees: courseData.fees ?? current.fees,
    start_date: courseData.start_date ?? current.start_date,
    end_date: courseData.end_date ?? current.end_date,
    video_expire_days: courseData.video_expire_days ?? current.video_expire_days,
  };

  await pool.query(
    `UPDATE courses
     SET course_name = ?, description = ?, fees = ?, start_date = ?, end_date = ?, video_expire_days = ?
     WHERE course_id = ?`,
    [payload.course_name, payload.description, payload.fees, payload.start_date, payload.end_date, payload.video_expire_days, courseId]
  );

  const [rows] = await pool.query('SELECT * FROM courses WHERE course_id = ?', [courseId]);
  return rows[0];
};

const deleteCourse = async (courseId) => {
  const current = await getCourseById(courseId);
  await pool.query('DELETE FROM courses WHERE course_id = ?', [courseId]);
  return current;
};

const getCourseById = async (courseId) => {
  const [rows] = await pool.query('SELECT * FROM courses WHERE course_id = ?', [courseId]);

  if (!rows.length) {
    throw new AppError(404, 'Course not found');
  }

  return rows[0];
};

module.exports = { getActiveCourses, getAllCourses, addCourse, updateCourse, deleteCourse, getCourseById };
