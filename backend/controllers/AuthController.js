const User = require('../models/User');

const AuthController = {
  async signup(req, res) {
    try {
      const { username, email, password } = req.body;
      const user = new User({ username, email, password });
      await user.save();
      req.session.userId = user._id;
      res.json({ success: true, user });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || user.password !== password) {
        throw new Error('Invalid credentials');
      }
      req.session.userId = user._id;
      res.json({ success: true, user });
    } catch (error) {
      res.status(401).json({ success: false, error: error.message });
    }
  },

  async logout(req, res) {
    req.session.destroy();
    res.json({ success: true });
  }
};

module.exports = AuthController;