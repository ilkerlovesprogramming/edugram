import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:5000/api';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const signup = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, { username, email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(`${API_URL}/auth/logout`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};