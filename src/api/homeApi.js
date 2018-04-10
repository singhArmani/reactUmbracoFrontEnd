import APIUtil from './apiUtil';

const api = new APIUtil();

class HomeApi {
    getHomePageContent() {
        api.get()
    }
}

