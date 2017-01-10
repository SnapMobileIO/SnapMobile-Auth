'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
  function User($http, $httpParamSerializer) {
    _classCallCheck(this, User);

    this.$http = $http;
    this.$httpParamSerializer = $httpParamSerializer;
  }

  _createClass(User, [{
    key: 'me',
    value: function me(id) {
      return this.$http.get('/api/users/me');
    }
  }, {
    key: 'changePassword',
    value: function changePassword(_ref) {
      var newPassword = _ref.newPassword,
          oldPassword = _ref.oldPassword;

      var params = { oldPassword: oldPassword, newPassword: newPassword };
      return this.$http.put('/api/users/me/password', params);
    }
  }, {
    key: 'get',
    value: function get(id) {
      return this.$http.get('/api/users/' + id);
    }
  }, {
    key: 'query',
    value: function query(queryUrl) {
      queryUrl = '/api/users?' + this.$httpParamSerializer(queryUrl);
      return this.$http.get(queryUrl);
    }
  }, {
    key: 'create',
    value: function create(object) {
      return this.$http.post('/api/users/signup', object);
    }
  }, {
    key: 'update',
    value: function update(object) {
      return this.$http.put('/api/users/' + object._id, object);
    }
  }, {
    key: 'delete',
    value: function _delete(id) {
      return this.$http.delete('/api/users/' + id);
    }
  }, {
    key: 'deleteMultiple',
    value: function deleteMultiple(ids) {
      var requestUrl = '/api/users/deleteMultiple';
      return this.$http.post(requestUrl, { ids: ids });
    }
  }]);

  return User;
}();

exports.User = User;