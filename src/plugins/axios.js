import axios from 'axios'

const Axios = axios.create({
  // baseURL: 'http://localhost:8000/api',
  baseURL: 'https://api.appmeubarbeiro.com.br/api',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false
})

Axios.interceptors.request.use (
  function (config) {
    const token = localStorage.token
    const userToken = localStorage.userToken
    if (token) config.headers.Token = token
    else if (userToken) config.headers.Token = userToken
    return config
  },
  function (error) {
    return Promise.reject (error)
  }
);

Axios.interceptors.response.use(
  function (response) {
    return response;
  }, 
  function (error) {
    if (401 === error.response.status) {
      let path = window.location.pathname
      path = path.replace('/', '')
      localStorage.routePath = path
      let isAdmin = path.includes('admin')
      window.location = isAdmin ? '/autenticacao/barbeiro/login' : '/autenticacao/login'
    } else return Promise.reject(error)
  }
)

export default Axios