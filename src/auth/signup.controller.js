'use strict';

class SignupController {

  constructor(User, Auth, $state, $location, $injector) {
    this.user = {};
    this.errors = {};
    this.referrer = $state.params.referrer || null;

    this.User = User;
    this.$state = $state;
    this.$location = $location;
    this.Auth = Auth;

    // optional service to configure referrals
    try{
        let signupConfiguration = $injector.get('signupConfiguration');
        this.showReferral = signupConfiguration.showReferral
        if (this.showReferral && $state.params.r) {
          this.user.referralCode = $state.params.r;
        }
    } catch(e){
    }

  }

  register(form) {
    if (form.$valid) {
      let userObject = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password
      };
      if (this.showReferral) {
        userObject.referralCode = this.user.referralCode;
      }
      this.User.create(userObject)
      .then((response) => {
        // Set auth token and current user from response
        this.Auth.setToken(response.data.token);
        this.Auth.currentUser = response.data;

        // User created, redirect
        if (this.referrer) {
          this.$location.url(this.referrer);
        } else {
          this.$location.url('/');
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
