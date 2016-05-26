'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {

  /**
   * Constructor
   */

  function User($http) {
    _classCallCheck(this, User);

    this.$http = $http;
  }

  _createClass(User, [{
    key: 'me',
    value: function me(id) {
      return this.$http.get('/api/users/me');
    }
  }, {
    key: 'changePassword',
    value: function changePassword(_ref) {
      var newPassword = _ref.newPassword;
      var oldPassword = _ref.oldPassword;

      var params = { oldPassword: oldPassword, newPassword: newPassword };
      return this.$http.put('/api/users/me/password', params);
    }
  }]);

  return User;
}();

exports.User = User;