'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PasswordController = function () {
  function PasswordController(Auth) {
    _classCallCheck(this, PasswordController);

    this.user = {};
    this.errors = {};

    this.Auth = Auth;
  }

  _createClass(PasswordController, [{
    key: 'changePassword',
    value: function changePassword(form) {
      var _this = this;

      if (form.$valid) {
        this.errors = {};
        this.message = '';
        this.Auth.changePassword(this.user.oldPassword, this.user.newPassword).then(function () {
          _this.user = {};
          _this.message = 'Password successfully changed.';
          form.$setPristine();
        }).catch(function () {
          _this.errors.other = 'Incorrect password';
        });
      }
    }
  }]);

  return PasswordController;
}();

exports.PasswordController = PasswordController;