const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const { loginValidationRules, validate } = require('../validators/authValidator');

// POST /auth/login
router.post('/login', loginValidationRules, validate, authController.login);

module.exports = router;
