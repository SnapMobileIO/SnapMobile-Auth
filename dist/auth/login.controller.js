'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginController = function () {
  function LoginController(Auth, $state, $location) {
    _classCallCheck(this, LoginController);

    this.user = {};
    this.errors = {};
    this.referrer = $state.params.referrer || null;

    this.Auth = Auth;
    this.$state = $state;
    this.$location = $location;
  }

  _createClass(LoginController, [{
    key: 'login',
    value: function login(form) {
      var _this = this;

      if (form.$valid) {
        this.Auth.login({
          email: this.user.email,
          password: this.user.password
        }).then(function (response) {
          // Logged in, redirect to main or referrer (sent in params)
          if (_this.referrer) {
            _this.$location.url(_this.referrer);
          } else {
            _this.$location.url('/');
          }
        }).catch(function (err) {
          _this.errors.other = err.message || err.data.message;
        });
      }
    }
  }]);

  return LoginController;
}();

exports.LoginController = LoginController;