'use strict';

class Auth {

  constructor(User, $http, $cookies, $q, $rootScope) {
    // TODO: Move to config
    this.$http = $http;
    this.$cookies = $cookies;
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.User = User;
    this.currentUser = null;

    // Initial setup for current user
    if (!this.isLoggedIn()) {
      this.initializeCurrentUser(() => {

      });
    }
  }

  /**
   * Login POST request using the required urlencoded $http header
   * @param  {Object} Email and password sent as properties
   * @return {Promise}
   */
  login({ email, password }) {
    return this.$http({
      url: '/auth/login',
      method: 'POST',
      data: 'email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      this.setToken(response.data.token);
      return this.getCurrentUser();
    })
    .then((response) => {
      this.setCurrentUser(response.data);
    })
    .catch(err => {
      this.logout();
      return this.$q.reject(err.data);
    });
  }

  logout() {
    this.$cookies.remove('token');
    this.setCurrentUser(null);
  }

  initializeCurrentUser(callback) {
    if (this.token()) {
      this.getCurrentUser()
        .then((response) => {
          this.setCurrentUser(response.data);
          callback();
        });
    }
  }

  changePassword(oldPassword, newPassword) {
    return this.User.changePassword({
      oldPassword: oldPassword,
      newPassword: newPassword
    });
  }

  forgotPassword(email) {
    return this.$http.put('/api/users/me/forgot', { email: email });
  }

  confirmResetToken(token) {
    return this.$http.get('/api/users/me/reset/' + token);
  }

  resetPassword({ token, password }) {
    return this.$http.put('/api/users/me/reset/' + token, { password: password });
  }

  isLoggedIn() {
    return this.currentUser ? true : false;
  }

  hasRole(role) {
    if (!this.currentUser) {
      return false;
    }

    if (this.currentUser.roles && this.currentUser.roles.indexOf(role) < 0) {
      return false;
    }

    return true;
  }

  token() {
    return this.$cookies.get('token');
  }

  setToken(token) {
    return this.$cookies.put('token', token);
  }

  getCurrentUser() {
    return this.User.me()
      .catch(err => this.$q.reject(err.data));
  }

  /**
   * @param  {Object} User object or null
   * Sets $rootScope and this.currentUser to currentUser
   */
  setCurrentUser(currentUser) {
    this.currentUser = currentUser;
    this.$rootScope.currentUser = currentUser;
  }
}

export { Auth };
