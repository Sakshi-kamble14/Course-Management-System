require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { testConnection } = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const videoRoutes = require('./routes/videoRoutes');
const adminRoutes = require('./routes/adminRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// ----- Global middleware -----
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ----- Health check -----
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'MERN Course Management System API is running',
  });
});

// ----- Routes -----
app.use('/auth', authRoutes);
app.use('/course', courseRoutes);
app.use('/video', videoRoutes);
app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);

// ----- 404 + centralized error handling (must be last) -----
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await testConnection();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to connect to the database. Server not started.');
    console.error(err.message);
    process.exit(1);
  }
}

start();

module.exports = app;
