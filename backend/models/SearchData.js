const mongoose = require('mongoose');

const SearchDataSchema = new mongoose.Schema({
  searchTerms: [{
    term: String,
    count: Number
  }],
  images: [{
    url: String,
    alt: String
  }],
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('SearchData', SearchDataSchema);