import axios from 'axios';
axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchCampers = async () => {
  const response = await axios.get('/campers');
  return response.data;
};
export const fetchCamperById = async camperId => {
  const response = await axios.get(`/campers/${camperId}`);
  return response.data;
};
