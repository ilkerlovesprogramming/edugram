const searchService = require('../services/searchService');

const SearchController = {
  async getSearchData(req, res) {
    try {
      const { query } = req.query;
      const searchResults = await searchService.search(query);
      res.json({ success: true, data: searchResults });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
    try {
      const searchData = await SearchData.findOne();
      if (!searchData) {
        // Initialize with dummy data if none exists
        const initialData = new SearchData({
          searchTerms: [
            { term: 'data science', count: 125 },
            { term: 'machine learning', count: 89 },
            { term: 'artificial intelligence', count: 67 }
          ],
          images: [
            { url: 'https://example.com/search-icon.png', alt: 'Search Icon' },
            { url: 'https://example.com/result-icon.png', alt: 'Result Icon' }
          ]
        });
        await initialData.save();
        return res.json({ success: true, data: initialData });
      }
      res.json({ success: true, data: searchData });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
};

module.exports = SearchController;