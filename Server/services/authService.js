const bcrypt = require('bcrypt');
const AppError = require('../utils/AppError');
const { signToken } = require('../config/jwt');
const { pool } = require('../config/db');

const loginUser = async ({ email, password }) => {
  const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

  if (!users.length) {
    throw new AppError(401, 'Invalid email or password');
  }

  const user = users[0];
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new AppError(401, 'Invalid email or password');
  }

  const token = signToken({ userId: user.user_id, role: user.role, email: user.email });

  return {
    token,
    user: {
      userId: user.user_id,
      email: user.email,
      role: user.role,
    },
  };
};

module.exports = { loginUser };
