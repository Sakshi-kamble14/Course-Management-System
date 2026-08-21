const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');
const { loginValidation } = require('../validators/authValidator');
const { handleValidationErrors } = require('../utils/validators');

router.post('/login', loginValidation, handleValidationErrors, login);

module.exports = router;
