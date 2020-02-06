import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: '/graphql',
  withCredentials: true
})

axiosInstance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

const request = (data) => {
  return axiosInstance.post('', { query: data })
}

export default request