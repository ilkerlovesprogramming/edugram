const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGODB_URI || 'mongodb+srv://someadm:someadm@cluster0.8ki5std.mongodb.net/',
  sessionSecret: process.env.SESSION_SECRET || 'efrgsdhnsdhdshdhdghdg-dghdghdghhd',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:19006',
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'dfsdghjfhdgsdhgh',
  jwtExpiration: '24h'
};