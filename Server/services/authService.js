const bcrypt = require('bcryptjs');
const { pool } = require('../config/db');
const { generateToken } = require('../utils/jwt');
const { AppError } = require('../middleware/errorMiddleware');

/**
 * Authenticates a user by email + password.
 * Returns { token, user } on success. Throws AppError(401) on invalid credentials.
 */
async function login(email, password) {
  const [rows] = await pool.execute(
    'SELECT user_id, email, password, role FROM users WHERE email = ?',
    [email]
  );

  if (rows.length === 0) {
    throw new AppError('Invalid email or password', 401);
  }

  const user = rows[0];

  const passwordMatches = await bcrypt.compare(password, user.password);
  if (!passwordMatches) {
    throw new AppError('Invalid email or password', 401);
  }

  const token = generateToken({
    userId: user.user_id,
    email: user.email,
    role: user.role,
  });

  return {
    token,
    user: {
      userId: user.user_id,
      email: user.email,
      role: user.role,
    },
  };
}

module.exports = { login };
