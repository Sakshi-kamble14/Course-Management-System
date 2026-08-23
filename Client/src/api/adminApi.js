import api from './axios';

// GET /admin/enrolled-students (admin, optional courseId query) -> { data: { students } }
export function getEnrolledStudents(courseId) {
  const params = courseId ? { courseId } : {};
  return api.get('/admin/enrolled-students', { params }).then((res) => res.data.data.students);
}
