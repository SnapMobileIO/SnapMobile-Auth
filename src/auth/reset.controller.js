'use strict';

class ResetController {

  constructor(Auth, $state, $location, $stateParams) {
    this.user = {};
    this.errors = {};
    this.message = '';

    this.Auth = Auth;
    this.$state = $state;
    this.$location = $location;
    this.$stateParams = $stateParams;

    this.token = this.$stateParams.token;
  }

  confirmToken() {
    this.Auth.confirmResetToken(this.token)
      .catch(err => {
        this.errors = err.message || err.data.message || err.data.errors;
      });
  }

  resetPassword(form) {
    if (form.$valid) {
      this.errors = {};
      this.message = '';
      this.Auth.resetPassword({ token: this.token, password: this.user.password })
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

export { ResetController };
