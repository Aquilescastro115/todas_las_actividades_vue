import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/emprendedores',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getAll() {
    return apiClient.get('/');
  },
  getById(id) {
    return apiClient.get(`/${id}`);
  },
  buscar(comuna, rubro) {
    const params = {};
    if (comuna && comuna.trim()) params.comuna = comuna.trim();
    if (rubro) params.rubro = rubro;
    return apiClient.get('/buscar', { params });
  },
  create(payload) {
    return apiClient.post('/', payload);
  },
  update(id, payload) {
    return apiClient.put(`/${id}`, payload);
  },
  delete(id) {
    return apiClient.delete(`/${id}`);
  },
};