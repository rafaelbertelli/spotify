import axios from 'axios';

const environment = process.env.NODE_ENV;

const BASE_URL = {
  development: 'http://localhost:4000',
  production: 'http://localhost:4000',
};

const api = {
  getPlaylists: axios.create({
    baseURL: BASE_URL[environment],
    timeout: 3000,
    headers: {
      Accept: 'application/json; charset=UTF-8',
      'Content-Type': 'application/json; charset=UTF-8',
    },
  }),
  getPlaylistDetails: axios.create({
    baseURL: BASE_URL[environment],
    timeout: 3000,
    headers: {
      Accept: 'application/json; charset=UTF-8',
      'Content-Type': 'application/json; charset=UTF-8',
    },
  }),
};

export default api;
