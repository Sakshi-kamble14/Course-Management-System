const { body, param } = require('express-validator');

const createVideoValidation = [
  body('course_id').isInt({ min: 1 }).withMessage('Course ID is required and must be positive'),
  body('title').trim().notEmpty().withMessage('Video title is required').isLength({ min: 2, max: 150 }).withMessage('Title must be 2-150 characters'),
  body('description').optional().trim().isLength({ max: 2000 }).withMessage('Description too long'),
  body('youtube_url').trim().notEmpty().withMessage('YouTube URL is required').isURL().withMessage('YouTube URL must be a valid URL'),
];

const updateVideoValidation = [
  param('videoId').isInt({ min: 1 }).withMessage('Video ID must be a positive integer'),
  body('course_id').optional().isInt({ min: 1 }).withMessage('Course ID must be positive'),
  body('title').optional().trim().notEmpty().withMessage('Video title cannot be empty').isLength({ min: 2, max: 150 }).withMessage('Title must be 2-150 characters'),
  body('description').optional().trim().isLength({ max: 2000 }).withMessage('Description too long'),
  body('youtube_url').optional().trim().notEmpty().withMessage('YouTube URL cannot be empty').isURL().withMessage('YouTube URL must be a valid URL'),
];

const videoIdValidation = [
  param('videoId').isInt({ min: 1 }).withMessage('Video ID must be a positive integer'),
];

module.exports = { createVideoValidation, updateVideoValidation, videoIdValidation };
