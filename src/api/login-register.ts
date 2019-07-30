import axios from 'axios';

const api = {
  register: (params: any) => {
    // return axios.post('/register/name', params);
    return axios.post('api/user/register', params);
  },
  login: (params: any) => {
    // return axios.post('/users/name/login', params);
    return axios.post('api/user/login', params);
  }
}

export default api;
