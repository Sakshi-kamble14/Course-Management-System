const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const { protect, authorize } = require('../middleware/auth');
const { handleValidationErrors } = require('../utils/validators');
const {
  registerToCourseValidation,
  changePasswordValidation,
  courseIdQueryValidation,
} = require('../validators/studentValidator');

router.post('/register-to-course', protect, authorize('student'), registerToCourseValidation, handleValidationErrors, studentController.registerToCourse);
router.put('/change-password', protect, authorize('student'), changePasswordValidation, handleValidationErrors, studentController.changePassword);
router.get('/my-courses', protect, authorize('student'), studentController.getMyCourses);
router.get('/my-course-with-videos', protect, authorize('student'), courseIdQueryValidation, handleValidationErrors, studentController.getMyCourseWithVideos);

module.exports = router;
