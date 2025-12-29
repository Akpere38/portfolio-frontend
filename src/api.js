import axios from 'axios';

const API_BASE = 'http://127.0.0.1:8000/api';

export const fetchProjects = async () => {
  const res = await axios.get(`${API_BASE}/projects/`);
  return res.data;
};

export const fetchSkills = async () => {
  const res = await axios.get(`${API_BASE}/skills/`);
  return res.data;
};

