import APIUtil from './apiUtil';
import qs from 'qs';

const api = new APIUtil();

const AuthApi = {
  signIn(email, password) {
    const payload = {
      username: email,
      password,
      grant_type: 'password'
    };

    return api.post('oauth/token', qs.stringify(payload));
  }
};

export default AuthApi;
