const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  try {
    // Check for session
    if (!req.session || !req.session.userId) {
      return res.status(401).json({
        success: false,
        error: 'Access denied. Please log in.'
      });
    }
    
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: 'Invalid token'
    });
  }
};

module.exports = {
  authenticateToken
};