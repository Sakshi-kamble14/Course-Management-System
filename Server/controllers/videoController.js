const videoService = require('../services/videoService');
const { sendSuccess } = require('../utils/response');

const getAllVideos = async (req, res, next) => {
  try {
    const videos = await videoService.getAllVideos(req.user);
    return sendSuccess(res, 200, 'Videos fetched successfully', videos);
  } catch (error) {
    return next(error);
  }
};

const addVideo = async (req, res, next) => {
  try {
    const video = await videoService.addVideo(req.body);
    return sendSuccess(res, 201, 'Video added successfully', video);
  } catch (error) {
    return next(error);
  }
};

const updateVideo = async (req, res, next) => {
  try {
    const video = await videoService.updateVideo(req.params.videoId, req.body);
    return sendSuccess(res, 200, 'Video updated successfully', video);
  } catch (error) {
    return next(error);
  }
};

const deleteVideo = async (req, res, next) => {
  try {
    const deletedVideo = await videoService.deleteVideo(req.params.videoId);
    return sendSuccess(res, 200, 'Video deleted successfully', deletedVideo);
  } catch (error) {
    return next(error);
  }
};

module.exports = { getAllVideos, addVideo, updateVideo, deleteVideo };
