import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:5000/api';

export const getProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/profile`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const updateProfile = async (updates) => {
  try {
    const response = await axios.put(`${API_URL}/users/profile`, updates);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};