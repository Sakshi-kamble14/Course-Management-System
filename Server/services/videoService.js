const { pool } = require('../config/db');
const AppError = require('../utils/AppError');

const getAllVideos = async (user = null) => {
  if (!user || user.role !== 'student') {
    const [rows] = await pool.query('SELECT * FROM videos ORDER BY video_id DESC');
    return rows;
  }

  const [studentRows] = await pool.query('SELECT reg_no FROM students WHERE user_id = ?', [user.userId]);

  if (!studentRows.length) {
    throw new AppError(404, 'Student profile not found');
  }

  const [rows] = await pool.query(
    `SELECT v.*
     FROM videos v
     INNER JOIN enrollments e ON e.course_id = v.course_id
     WHERE e.reg_no = ? AND e.status = 'active'
     ORDER BY v.video_id DESC`,
    [studentRows[0].reg_no]
  );

  return rows;
};

const addVideo = async (videoData) => {
  const { course_id, title, description, youtube_url } = videoData;

  const [result] = await pool.query(
    'INSERT INTO videos (course_id, title, description, youtube_url) VALUES (?, ?, ?, ?)',
    [course_id, title, description || null, youtube_url]
  );

  const [rows] = await pool.query('SELECT * FROM videos WHERE video_id = ?', [result.insertId]);
  return rows[0];
};

const updateVideo = async (videoId, videoData) => {
  const current = await getVideoById(videoId);

  const payload = {
    course_id: videoData.course_id ?? current.course_id,
    title: videoData.title ?? current.title,
    description: videoData.description ?? current.description,
    youtube_url: videoData.youtube_url ?? current.youtube_url,
  };

  await pool.query(
    'UPDATE videos SET course_id = ?, title = ?, description = ?, youtube_url = ? WHERE video_id = ?',
    [payload.course_id, payload.title, payload.description, payload.youtube_url, videoId]
  );

  const [rows] = await pool.query('SELECT * FROM videos WHERE video_id = ?', [videoId]);
  return rows[0];
};

const deleteVideo = async (videoId) => {
  const current = await getVideoById(videoId);
  await pool.query('DELETE FROM videos WHERE video_id = ?', [videoId]);
  return current;
};

const getVideoById = async (videoId) => {
  const [rows] = await pool.query('SELECT * FROM videos WHERE video_id = ?', [videoId]);

  if (!rows.length) {
    throw new AppError(404, 'Video not found');
  }

  return rows[0];
};

module.exports = { getAllVideos, addVideo, updateVideo, deleteVideo, getVideoById };
