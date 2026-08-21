const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const { protect, authorize } = require('../middleware/auth');

router.get('/enrolled-students', protect, authorize('admin'), studentController.getEnrolledStudents);

module.exports = router;
