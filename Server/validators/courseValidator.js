const { body, param } = require('express-validator');

const createCourseValidation = [
  body('course_name').trim().notEmpty().withMessage('Course name is required').isLength({ min: 2, max: 100 }).withMessage('Course name must be 2-100 characters'),
  body('description').optional().trim().isLength({ max: 2000 }).withMessage('Description too long'),
  body('fees').isInt({ min: 0 }).withMessage('Fees must be a non-negative integer'),
  body('start_date').isISO8601().withMessage('Start date must be a valid ISO date'),
  body('end_date').isISO8601().withMessage('End date must be a valid ISO date'),
  body('video_expire_days').isInt({ min: 1 }).withMessage('Video expiry days must be a positive integer'),
];

const updateCourseValidation = [
  param('courseId').isInt({ min: 1 }).withMessage('Course ID must be a positive integer'),
  body('course_name').optional().trim().notEmpty().withMessage('Course name cannot be empty').isLength({ min: 2, max: 100 }).withMessage('Course name must be 2-100 characters'),
  body('description').optional().trim().isLength({ max: 2000 }).withMessage('Description too long'),
  body('fees').optional().isInt({ min: 0 }).withMessage('Fees must be a non-negative integer'),
  body('start_date').optional().isISO8601().withMessage('Start date must be a valid ISO date'),
  body('end_date').optional().isISO8601().withMessage('End date must be a valid ISO date'),
  body('video_expire_days').optional().isInt({ min: 1 }).withMessage('Video expiry days must be a positive integer'),
];

const courseIdValidation = [
  param('courseId').isInt({ min: 1 }).withMessage('Course ID must be a positive integer'),
];

module.exports = { createCourseValidation, updateCourseValidation, courseIdValidation };
