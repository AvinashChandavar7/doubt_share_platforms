import axios from 'axios';
import { config } from '../../config';


// Add an interceptor to set Authorization header globally
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const createMyDoubtsPost = async (post) => {
  try {
    const response = await axios.post(`${config.endpoint}/doubtRequest/create-doubt`, post);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getRecentDoubtsPosts = async () => {
  try {
    const response = await axios.get(`${config.endpoint}/doubtRequest/get-all-doubts`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
