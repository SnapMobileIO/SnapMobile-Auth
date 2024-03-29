'use strict';

class Auth {

  constructor(User, $http, $cookies, $q, $rootScope) {
    this.$http = $http;
    this.$cookies = $cookies;
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.User = User;
    this.currentUser = null;
    this.redirectState = null;
    this.redirectParams = null;

    // Initial setup for current user
    this.initializeCurrentUser(() => {

    });
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
      this.$rootScope.$broadcast('event:login-success');
    })
    .catch(err => {
      this.logout();
      return this.$q.reject(err.data);
    });
  }

  logout() {
    this.$cookies.remove('token');
    this.setCurrentUser(null);
    this.$rootScope.$broadcast('event:logout-success');
  }

  initializeCurrentUser(callback) {
    if (!this.isLoggedIn() && this.token()) {
      this.getCurrentUser()
        .then((response) => {
          this.setCurrentUser(response.data);
          callback();
        });
    } else {
      callback();
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
