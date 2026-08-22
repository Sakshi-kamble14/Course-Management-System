const studentService = require('../services/studentService');
const { success } = require('../utils/response');
const { asyncHandler } = require('../middleware/errorMiddleware');

/**
 * GET /admin/enrolled-students  (admin)
 * Optional query param: courseId
 */
const getEnrolledStudents = asyncHandler(async (req, res) => {
  const { courseId } = req.query;
  const students = await studentService.getEnrolledStudents(courseId);
  return success(res, 200, 'Enrolled students retrieved successfully', { students });
});

module.exports = { getEnrolledStudents };
