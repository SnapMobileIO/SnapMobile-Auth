'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignupController = function () {
  function SignupController(User, Auth, $state, $location) {
    _classCallCheck(this, SignupController);

    this.user = {};
    this.errors = {};
    this.referrer = $state.params.referrer || null;

    this.User = User;
    this.$state = $state;
    this.$location = $location;
    this.Auth = Auth;
  }

  _createClass(SignupController, [{
    key: 'register',
    value: function register(form) {
      var _this = this;

      if (form.$valid) {
        this.User.create({
          name: this.user.name,
          email: this.user.email,
          password: this.user.password
        }).then(function (response) {
          // Set auth token and current user from response
          _this.Auth.setToken(response.data.token);
          _this.Auth.currentUser = response.data;

          // User created, redirect
          if (_this.referrer) {
            _this.$location.url(_this.referrer);
          } else {
            _this.$state.go('company-list');
          }
        }).catch(function (err) {
          _this.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.data.errors, function (error, field) {
            form[field].$setValidity('mongoose', false);
            _this.errors[field] = error.message;
          });
        });
      }
    }
  }]);

  return SignupController;
}();

exports.SignupController = SignupController;