// API service for frontend
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const fetchLogs = async () => {
  const res = await axios.get(`${API_BASE}/logs`);
  return res.data;
};

export const triggerImport = async () => {
  const res = await axios.post(`${API_BASE}/import`);
  return res.data;
};
