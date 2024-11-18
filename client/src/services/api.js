import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getJournals = async () => {
  const response = await axios.get(`${API_URL}/journals`);
  return response.data;
};

export const getJournal = async (id) => {
  const response = await axios.get(`${API_URL}/journals/${id}`);
  return response.data;
};

export const saveJournal = async (formData) => {
  const response = await axios.post(`${API_URL}/journals`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};
