'use strict';

class ForgotController {

  constructor(Auth, $state, $location) {
    this.user = {};
    this.errors = {};
    this.message = '';

    this.Auth = Auth;
    this.$state = $state;
    this.$location = $location;
  }

  forgotPassword(form) {
    if (form.$valid) {
      this.errors = {};
      this.message = '';
      this.Auth.forgotPassword(this.user.email)
        .then(response => {
          this.user = {};
          this.message = response.data.message;
          form.$setPristine();
        })
        .catch(err => {
          this.errors = err.message || err.data.message || err.data.errors;
        });
    }
  }
}

export { ForgotController };
