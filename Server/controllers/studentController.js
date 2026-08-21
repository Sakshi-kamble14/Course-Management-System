const studentService = require('../services/studentService');
const { sendSuccess } = require('../utils/response');

const getEnrolledStudents = async (req, res, next) => {
  try {
    const students = await studentService.getEnrolledStudents();
    return sendSuccess(res, 200, 'Enrolled students fetched successfully', students);
  } catch (error) {
    return next(error);
  }
};

const registerToCourse = async (req, res, next) => {
  try {
    const enrollment = await studentService.registerStudentToCourse(req.user.userId, req.body.course_id);
    return sendSuccess(res, 201, 'Student registered to course successfully', enrollment);
  } catch (error) {
    return next(error);
  }
};

const changePassword = async (req, res, next) => {
  try {
    const result = await studentService.changeStudentPassword(
      req.user.userId,
      req.body.currentPassword,
      req.body.newPassword
    );
    return sendSuccess(res, 200, 'Password changed successfully', result);
  } catch (error) {
    return next(error);
  }
};

const getMyCourses = async (req, res, next) => {
  try {
    const courses = await studentService.getStudentCourses(req.user.userId);
    return sendSuccess(res, 200, 'My courses fetched successfully', courses);
  } catch (error) {
    return next(error);
  }
};

const getMyCourseWithVideos = async (req, res, next) => {
  try {
    const result = await studentService.getStudentCourseWithVideos(req.user.userId, req.query.course_id);
    return sendSuccess(res, 200, 'My course videos fetched successfully', result);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getEnrolledStudents,
  registerToCourse,
  changePassword,
  getMyCourses,
  getMyCourseWithVideos,
};
