const HOST_URL = process.env.REACT_APP_DJANGO_SITE_URL;
const PORT = process.env.REACT_APP_DJANGO_PORT;
const API = process.env.REACT_APP_DJANGO_API_ENDPOINT;

export default {
  BUILDINGS_URL: `${HOST_URL}:${PORT}${API}buildings`,
  PAGES_URL: `${HOST_URL}:${PORT}${API}pages`,
  POSTS_URL: `${HOST_URL}:${PORT}${API}posts`,
  MAP_API_KEY: process.env.REACT_APP_API_KEY,
};
