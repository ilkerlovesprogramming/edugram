import axios from 'axios';

export const getSearchData = async () => {
  try {
    const response = await axios.get('/api/search/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching search data:', error);
    throw error;
  }
};