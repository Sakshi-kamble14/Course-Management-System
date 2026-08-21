const { loginUser } = require('../services/authService');
const { sendSuccess } = require('../utils/response');

const login = async (req, res, next) => {
  try {
    const result = await loginUser(req.body);
    return sendSuccess(res, 200, 'Login successful', result);
  } catch (error) {
    return next(error);
  }
};

module.exports = { login };
