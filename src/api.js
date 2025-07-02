// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://ecommerce-backend-r8r8.onrender.com', // Change this if your backend runs elsewhere
});

export default API;
