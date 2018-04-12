import APIUtil from './apiUtil';

const api = new APIUtil();

const ContentApi = {
  home: {
    getFullContent() {
      return api.get('rest/v1/content');
    }
  },

  //contact pages
  contact: {
    getFullContent() {
      return api.get('rest/v1/content/1066'); // hard coded value here
    }
  }
};

export default ContentApi;
