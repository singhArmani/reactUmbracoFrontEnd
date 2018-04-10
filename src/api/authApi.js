import APIUtil from './apiUtil';

const api = new APIUtil();

class AuthorizationApi {
    getHomePageContent() {
        api.get()
    }
}