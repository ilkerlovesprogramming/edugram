const User = require('../models/User');

const UserController = {
  async getProfile(req, res) {
    try {
      const userId = req.session.userId;
      if (!userId) {
        return res.status(401).json({ success: false, error: 'Not authenticated' });
      }
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
      }
      res.json({ success: true, user });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  async updateProfile(req, res) {
    try {
      const userId = req.session.userId;
      if (!userId) {
        return res.status(401).json({ success: false, error: 'Not authenticated' });
      }
      const updates = req.body;
      const user = await User.findByIdAndUpdate(userId, updates, { new: true });
      if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
      }
      res.json({ success: true, user });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
};

module.exports = UserController;