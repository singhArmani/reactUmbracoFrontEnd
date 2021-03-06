import axios from 'axios';
import * as LocalStorage from '../services/LocalStorage';
import appConfig from '../config';

// Add a request interceptor
axios.interceptors.request.use(
  function(config) {
    // adding token to the authorization header only
    if (config.url.includes('http://au.local/umbraco/oauth/token')) {
      return config;
    }
    config.headers = {
      authorization: `Bearer ${LocalStorage.getToken()}`
    };
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

class APIUtil {
  constructor(root = appConfig.baseRoot) {
    this.root = root;
  }
  /**
   * Get request
   *
   * @param  {string} path
   * @param  {object} config={}
   * @returns {axios.Promise}
   */
  get(path, config = {}) {
    return axios.get(`${this.root}/${path}`, config);
  }

  post(path, data, config = {}) {
    return axios.post(`${this.root}/${path}`, data, config);
  }
}

export default APIUtil;
