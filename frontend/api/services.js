import axios from 'axios';
import { API_URL } from '@env';

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const searchService = {
  async searchContent(query) {
    try {
      const response = await axiosInstance.get('/search', { params: { query } });
      return response.data;
    } catch (error) {
      console.error('Search error:', error);
      throw error;
    }
  }
};

export const profileService = {
  async getProfile(userId) {
    try {
      const response = await axiosInstance.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Get profile error:', error);
      throw error;
    }
  },

  async updateProfile(userId, data) {
    try {
      const response = await axiosInstance.put(`/users/${userId}`, data);
      return response.data;
    } catch (error) {
      console.error('Update profile error:', error);
      throw error;
    }
  }
};

export const authService = {
  async login(credentials) {
    try {
      const response = await axiosInstance.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  async register(userData) {
    try {
      const response = await axiosInstance.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  async logout() {
    try {
      await axiosInstance.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }
};