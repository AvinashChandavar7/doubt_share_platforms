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

