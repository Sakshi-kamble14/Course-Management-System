const authService = require('../services/authService');
const { asyncHandler } = require('../middleware/errorMiddleware');

/**
 * POST /auth/login
 * Response shape matches the project spec exactly:
 * { success, message, token, user: { userId, email, role } }
 */
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const { token, user } = await authService.login(email, password);

  return res.status(200).json({
    success: true,
    message: 'Login successful',
    token,
    user,
  });
});

module.exports = { login };
