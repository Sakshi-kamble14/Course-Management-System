const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');
const { authenticate } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const { validate, enrolledStudentsQueryValidationRules } = require('../validators/studentValidator');

// GET /admin/enrolled-students  (admin only)
router.get(
  '/enrolled-students',
  authenticate,
  authorize('admin'),
  enrolledStudentsQueryValidationRules,
  validate,
  adminController.getEnrolledStudents
);

module.exports = router;
