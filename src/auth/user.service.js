'use strict';

class User {

  /**
   * Constructor
   */
  constructor($http) {
    this.$http = $http;
  }

  me(id) {
    return this.$http.get('/api/users/me');
  }

  changePassword({ newPassword, oldPassword }) {
    let params = { oldPassword: oldPassword, newPassword: newPassword };
    return this.$http.put('/api/users/me/password', params);
  }

}

export { User };
