const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { protect, authorize } = require('../middleware/auth');
const { handleValidationErrors } = require('../utils/validators');
const {
  createCourseValidation,
  updateCourseValidation,
  courseIdValidation,
} = require('../validators/courseValidator');

router.get('/all-active-courses', courseController.getActiveCourses);
router.get('/all-courses', protect, authorize('admin'), courseController.getAllCourses);
router.post('/add', protect, authorize('admin'), createCourseValidation, handleValidationErrors, courseController.addCourse);
router.put('/update/:courseId', protect, authorize('admin'), updateCourseValidation, handleValidationErrors, courseController.updateCourse);
router.delete('/delete/:courseId', protect, authorize('admin'), courseIdValidation, handleValidationErrors, courseController.deleteCourse);

module.exports = router;
