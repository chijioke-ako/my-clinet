import axios from 'axios';

export default axios.create({
  withCredentials: true,
  // baseURL: 'http://localhost:8000/api',
  baseURL: 'https://my-backend-api.vercel.app/api',
  timeout: '1000',

  headers: {
    'Content-type': 'application/json',
  },
});
