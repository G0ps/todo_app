import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Your backend base URL
  timeout: 10000,                       // Request timeout in milliseconds (10s)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;