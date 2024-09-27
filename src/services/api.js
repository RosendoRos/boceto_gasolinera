import axios from 'axios';

export const getVentas = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get('API_URL/ventas', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
