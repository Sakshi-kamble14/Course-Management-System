const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');
const { protect, authorize } = require('../middleware/auth');
const { handleValidationErrors } = require('../utils/validators');
const {
  createVideoValidation,
  updateVideoValidation,
  videoIdValidation,
} = require('../validators/videoValidator');

router.get('/all-videos', protect, authorize('admin', 'student'), videoController.getAllVideos);
router.post('/add', protect, authorize('admin'), createVideoValidation, handleValidationErrors, videoController.addVideo);
router.put('/update/:videoId', protect, authorize('admin'), updateVideoValidation, handleValidationErrors, videoController.updateVideo);
router.delete('/delete/:videoId', protect, authorize('admin'), videoIdValidation, handleValidationErrors, videoController.deleteVideo);

module.exports = router;
