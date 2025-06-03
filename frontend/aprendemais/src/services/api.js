import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7271/api', // Altere conforme porta da sua API ASP.NET Core
});

export default api;
