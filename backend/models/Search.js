const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['user', 'content'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

searchSchema.index({ title: 'text', description: 'text', tags: 'text' });

searchSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Search = mongoose.model('Search', searchSchema);

module.exports = Search;