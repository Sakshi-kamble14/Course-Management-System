const courseService = require('../services/courseService');
const { sendSuccess } = require('../utils/response');

const getActiveCourses = async (req, res, next) => {
  try {
    const courses = await courseService.getActiveCourses();
    return sendSuccess(res, 200, 'Active courses fetched successfully', courses);
  } catch (error) {
    return next(error);
  }
};

const getAllCourses = async (req, res, next) => {
  try {
    const courses = await courseService.getAllCourses();
    return sendSuccess(res, 200, 'All courses fetched successfully', courses);
  } catch (error) {
    return next(error);
  }
};

const addCourse = async (req, res, next) => {
  try {
    const course = await courseService.addCourse(req.body);
    return sendSuccess(res, 201, 'Course added successfully', course);
  } catch (error) {
    return next(error);
  }
};

const updateCourse = async (req, res, next) => {
  try {
    const course = await courseService.updateCourse(req.params.courseId, req.body);
    return sendSuccess(res, 200, 'Course updated successfully', course);
  } catch (error) {
    return next(error);
  }
};

const deleteCourse = async (req, res, next) => {
  try {
    const deletedCourse = await courseService.deleteCourse(req.params.courseId);
    return sendSuccess(res, 200, 'Course deleted successfully', deletedCourse);
  } catch (error) {
    return next(error);
  }
};

module.exports = { getActiveCourses, getAllCourses, addCourse, updateCourse, deleteCourse };
