import axios from 'axios';

const api = axios.create({
  baseURL: 'https://todo-app-3uxm.onrender.com', // Your backend base URL
  timeout: 10000,                       // Request timeout in milliseconds (10s)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;