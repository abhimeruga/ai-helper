// src/config.js
export const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://ai-helper-server-1-cl9s.onrender.com'  // Your Render backend URL
  : 'http://localhost:5000';  // For local development