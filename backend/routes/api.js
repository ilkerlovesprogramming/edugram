const express = require('express');
const router = express.Router();
const auth = require('./auth');
const search = require('./search');
const user = require('./user');
const { authenticateToken } = require('../middleware/auth');

// Public routes
router.use('/auth', auth);

// Protected routes
router.use('/search', authenticateToken, search);
router.use('/users', authenticateToken, user);

module.exports = router;