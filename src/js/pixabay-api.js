import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '53020788-f0e72ace7309c782074e3a3d3';
export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then(response => response.data);
}
