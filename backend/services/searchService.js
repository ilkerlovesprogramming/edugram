const SearchData = require('../models/SearchData');

const searchService = {
  async search(query) {
    try {
      return await SearchData.find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } },
          { tags: { $regex: query, $options: 'i' } }
        ]
      }).limit(20);
    } catch (error) {
      throw new Error(`Search failed: ${error.message}`);
    }
  },

  async create(data, userId) {
    try {
      return await SearchData.create({
        ...data,
        userId
      });
    } catch (error) {
      throw new Error(`Create search data failed: ${error.message}`);
    }
  },

  async update(id, userId, update) {
    try {
      const searchData = await SearchData.findOneAndUpdate(
        { _id: id, userId },
        update,
        { new: true }
      );
      
      if (!searchData) {
        throw new Error('Search data not found');
      }
      
      return searchData;
    } catch (error) {
      throw new Error(`Update search data failed: ${error.message}`);
    }
  },

  async delete(id, userId) {
    try {
      const searchData = await SearchData.findOneAndDelete({
        _id: id,
        userId
      });
      
      if (!searchData) {
        throw new Error('Search data not found');
      }
      
      return searchData;
    } catch (error) {
      throw new Error(`Delete search data failed: ${error.message}`);
    }
  }
};

module.exports = searchService;