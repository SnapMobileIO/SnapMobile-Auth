'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ForgotController = function () {
  function ForgotController(Auth, $state, $location) {
    _classCallCheck(this, ForgotController);

    this.user = {};
    this.errors = {};
    this.message = '';

    this.Auth = Auth;
    this.$state = $state;
    this.$location = $location;
  }

  _createClass(ForgotController, [{
    key: 'forgotPassword',
    value: function forgotPassword(form) {
      var _this = this;

      if (form.$valid) {
        this.errors = {};
        this.message = '';
        this.Auth.forgotPassword(this.user.email).then(function (response) {
          _this.user = {};
          _this.message = response.data.message;
          form.$setPristine();
        }).catch(function (err) {
          _this.errors = err.message || err.data.message || err.data.errors;
        });
      }
    }
  }]);

  return ForgotController;
}();

exports.ForgotController = ForgotController;