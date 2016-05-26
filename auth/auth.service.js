'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Auth = function () {
  function Auth(User, $http, $cookies, $q, $rootScope) {
    var _this = this;

    _classCallCheck(this, Auth);

    // TODO: Move to config
    this.$http = $http;
    this.$cookies = $cookies;
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.User = User;
    this.currentUser = null;

    // Initial setup for current user
    if (this.token()) {
      this.getCurrentUser().then(function (response) {
        _this.setCurrentUser(response.data);
      });
    }
  }

  /**
   * Login POST request using the required urlencoded $http header
   * @param  {Object} Email and password sent as properties
   * @return {Promise}
   */


  _createClass(Auth, [{
    key: 'login',
    value: function login(_ref) {
      var _this2 = this;

      var email = _ref.email;
      var password = _ref.password;

      return this.$http({
        url: '/auth/login',
        method: 'POST',
        data: 'email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (response) {
        _this2.setToken(response.data.token);
        return _this2.getCurrentUser();
      }).then(function (response) {
        _this2.setCurrentUser(response.data);
      }).catch(function (err) {
        _this2.logout();
        return _this2.$q.reject(err.data);
      });
    }
  }, {
    key: 'logout',
    value: function logout() {
      this.$cookies.remove('token');
      this.setCurrentUser(null);
    }
  }, {
    key: 'changePassword',
    value: function changePassword(oldPassword, newPassword) {
      return this.User.changePassword({
        oldPassword: oldPassword,
        newPassword: newPassword
      });
    }
  }, {
    key: 'forgotPassword',
    value: function forgotPassword(email) {
      return this.$http.put('/api/users/me/forgot', { email: email });
    }
  }, {
    key: 'confirmResetToken',
    value: function confirmResetToken(token) {
      return this.$http.get('/api/users/me/reset/' + token);
    }
  }, {
    key: 'resetPassword',
    value: function resetPassword(_ref2) {
      var token = _ref2.token;
      var password = _ref2.password;

      return this.$http.put('/api/users/me/reset/' + token, { password: password });
    }
  }, {
    key: 'isLoggedIn',
    value: function isLoggedIn() {
      return this.currentUser ? true : false;
    }
  }, {
    key: 'hasRole',
    value: function hasRole(role) {
      if (!this.currentUser) {
        return false;
      }

      if (this.currentUser.roles && this.currentUser.roles.indexOf(role) < 0) {
        return false;
      }

      return true;
    }
  }, {
    key: 'token',
    value: function token() {
      return this.$cookies.get('token');
    }
  }, {
    key: 'setToken',
    value: function setToken(token) {
      return this.$cookies.put('token', token);
    }
  }, {
    key: 'getCurrentUser',
    value: function getCurrentUser() {
      var _this3 = this;

      return this.User.me().catch(function (err) {
        return _this3.$q.reject(err.data);
      });
    }

    /**
     * @param  {Object} User object or null
     * Sets $rootScope and this.currentUser to currentUser
     */

  }, {
    key: 'setCurrentUser',
    value: function setCurrentUser(currentUser) {
      this.currentUser = currentUser;
      this.$rootScope.currentUser = currentUser;
    }
  }]);

  return Auth;
}();

exports.Auth = Auth;