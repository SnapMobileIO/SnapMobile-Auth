'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResetController = function () {
  function ResetController(Auth, $state, $location, $stateParams) {
    _classCallCheck(this, ResetController);

    this.user = {};
    this.errors = {};
    this.message = '';

    this.Auth = Auth;
    this.$state = $state;
    this.$location = $location;
    this.$stateParams = $stateParams;

    this.token = this.$stateParams.token;
  }

  _createClass(ResetController, [{
    key: 'confirmToken',
    value: function confirmToken() {
      var _this = this;

      this.Auth.confirmResetToken(this.token).catch(function (err) {
        _this.errors = err.message || err.data.message || err.data.errors;
      });
    }
  }, {
    key: 'resetPassword',
    value: function resetPassword(form) {
      var _this2 = this;

      if (form.$valid) {
        this.errors = {};
        this.message = '';
        this.Auth.resetPassword({ token: this.token, password: this.user.password }).then(function (response) {
          _this2.user = {};
          _this2.message = response.data.message;
          form.$setPristine();
        }).catch(function (err) {
          _this2.errors = err.message || err.data.message || err.data.errors;
        });
      }
    }
  }]);

  return ResetController;
}();

exports.ResetController = ResetController;