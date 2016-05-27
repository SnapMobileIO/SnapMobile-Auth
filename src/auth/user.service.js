'use strict';

class User {

  constructor($http, $httpParamSerializer) {
    this.$http = $http;
    this.$httpParamSerializer = $httpParamSerializer;
  }

  me(id) {
    return this.$http.get('/api/users/me');
  }

  changePassword({ newPassword, oldPassword }) {
    let params = { oldPassword: oldPassword, newPassword: newPassword };
    return this.$http.put('/api/users/me/password', params);
  }

  get(id) {
    return this.$http.get('/api/users/' + id);
  }

  query(queryUrl) {
    queryUrl = '/api/users?' + this.$httpParamSerializer(queryUrl);
    return this.$http.get(queryUrl);
  }

  create(object) {
    return this.$http.post('/api/users/signup', object);
  }

  update(object) {
    return this.$http.put('/api/users/' + object._id, object);
  }

  delete(id) {
    return this.$http.delete('/api/users/' + id);
  }

  deleteMultiple(ids) {
    let requestUrl = '/api/users/deleteMultiple';
    return this.$http.post(requestUrl, { ids: ids });
  }

}

export { User };
