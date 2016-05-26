'use strict';

class SignupController {

  constructor(User, Auth, $state, $location) {
    this.user = {};
    this.errors = {};
    this.referrer = $state.params.referrer || null;

    this.User = User;
    this.$state = $state;
    this.$location = $location;
    this.Auth = Auth;
  }

  register(form) {
    if (form.$valid) {
      this.User.create({
        name: this.user.name,
        email: this.user.email,
        password: this.user.password
      })
      .then((response) => {
        // Set auth token and current user from response
        this.Auth.setToken(response.data.token);
        this.Auth.currentUser = response.data;

        // User created, redirect
        if (this.referrer) {
          this.$location.url(this.referrer);
        } else {
          this.$state.go('company-list');
        }
      })
      .catch(err => {
        this.errors = {};

        // Update validity of form fields that match the mongoose errors
        angular.forEach(err.data.errors, (error, field) => {
          form[field].$setValidity('mongoose', false);
          this.errors[field] = error.message;
        });
      });
    }
  }
}

export { SignupController };
