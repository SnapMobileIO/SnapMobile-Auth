'use strict';

class LoginController {

  constructor(Auth, $state, $location) {
    this.user = {};
    this.errors = {};
    this.referrer = $state.params.referrer || null;

    this.Auth = Auth;
    this.$state = $state;
    this.$location = $location;
  }

  login(form) {
    if (form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
      .then((response) => {
        // Logged in, redirect to main or referrer (sent in params)
        if (this.referrer) {
          this.$location.url(this.referrer);
        } else {
          this.$location.url('/');
        }
      })
      .catch(err => {
        this.errors.other = err.message || err.data.message;
      });
    }
  }
}

export { LoginController };
