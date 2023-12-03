import axios from 'axios';
import { config } from '../../config';

export const registerUser = async (values) => {
  try {
    const response = await axios.post(`${config.endpoint}/users/register`, values);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const loginUser = async (values) => {
  try {
    const response = await axios.post(`${config.endpoint}/users/login`, values);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getCurrentUser = async (values) => {
  try {
    const response = await axios.get(`${config.endpoint}/users/current-user`, values);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

