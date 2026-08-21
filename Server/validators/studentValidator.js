const { body, query } = require('express-validator');

const registerToCourseValidation = [
  body('course_id').isInt({ min: 1 }).withMessage('Course ID is required and must be positive'),
];

const changePasswordValidation = [
  body('currentPassword').notEmpty().withMessage('Current password is required'),
  body('newPassword').isLength({ min: 6 }).withMessage('New password must be at least 6 characters long'),
];

const courseIdQueryValidation = [
  query('course_id').isInt({ min: 1 }).withMessage('Course ID query parameter must be a positive integer'),
];

module.exports = { registerToCourseValidation, changePasswordValidation, courseIdQueryValidation };
