import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_BASE_URL || "https://vietsubmoi.online",  // Replace with your API base URL
  timeout: 10000,                      // Request timeout (optional)
  headers: {
    'Content-Type': 'application/json', // Default content-type
  }
});

// Interceptors to add authentication token or log requests (optional)
api.interceptors.request.use(config => {
  // Add token or any authorization logic here
  // config.headers['Authorization'] = `Bearer ${token}`;
  return config;
}, error => {
  return Promise.reject(error);
});

api.interceptors.response.use(response => {
  // You can handle response globally here
  return response;
}, error => {
  // Handle errors globally here, e.g., logging or redirecting
  return Promise.reject(error);
});

export default api;
