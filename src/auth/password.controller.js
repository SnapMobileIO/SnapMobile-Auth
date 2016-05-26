'use strict';

class PasswordController {

  constructor(Auth) {
    this.user = {};
    this.errors = {};

    this.Auth = Auth;
  }

  changePassword(form) {
    if (form.$valid) {
      this.errors = {};
      this.message = '';
      this.Auth.changePassword(this.user.oldPassword, this.user.newPassword)
        .then(() => {
          this.user = {};
          this.message = 'Password successfully changed.';
          form.$setPristine();
        })
        .catch(() => {
          this.errors.other = 'Incorrect password';
        });
    }
  }
}

export { PasswordController };
