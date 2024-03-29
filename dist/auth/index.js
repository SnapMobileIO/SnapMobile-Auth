'use strict';

var _user = require('./user.service');

var _auth = require('./auth.service');

var _login = require('./login.controller');

var _signup = require('./signup.controller');

var _password = require('./password.controller');

var _forgot = require('./forgot.controller');

var _reset = require('./reset.controller');

var _match = require('./match.directive');

var app = angular.module('authApp', ['ui.router']);

app.service('User', _user.User);
app.service('Auth', _auth.Auth);
app.directive('match', _match.MatchDirective);
app.controller('LoginController', _login.LoginController);
app.controller('SignupController', _signup.SignupController);
app.controller('PasswordController', _password.PasswordController);
app.controller('ForgotController', _forgot.ForgotController);
app.controller('ResetController', _reset.ResetController);

require('./views/forgot.js');
require('./views/login.js');
require('./views/password.js');
require('./views/reset.js');
require('./views/signup.js');

app.config(function ($stateProvider) {
  $stateProvider.state('login', {
    url: '/login?referrer',
    templateUrl: 'authApp/auth/views/login.html',
    controller: 'LoginController',
    controllerAs: 'vm',
    parent: 'app'
  }).state('logout', {
    url: '/logout',
    templateUrl: 'authApp/auth/views/login.html',
    parent: 'app',
    controller: function controller($state, Auth) {
      Auth.logout();
      $state.go('login');
    }
  }).state('signup', {
    url: '/signup?referrer&email&firstName&lastName',
    templateUrl: 'authApp/auth/views/signup.html',
    controller: 'SignupController',
    controllerAs: 'vm',
    parent: 'app'
  }).state('password', {
    url: '/password',
    templateUrl: 'authApp/auth/views/password.html',
    controller: 'PasswordController',
    controllerAs: 'vm',
    authenticate: true,
    parent: 'app'
  }).state('forgot', {
    url: '/forgot',
    templateUrl: 'authApp/auth/views/forgot.html',
    controller: 'ForgotController',
    controllerAs: 'vm',
    parent: 'app'
  }).state('reset', {
    url: '/reset/:token',
    templateUrl: 'authApp/auth/views/reset.html',
    controller: 'ResetController',
    controllerAs: 'vm',
    parent: 'app'
  });
});

function setOverwriteViews(views) {
  app.run(function ($state) {
    for (var i = views.length - 1; i >= 0; i--) {
      var state = $state.get(views[i]);
      if (state) {
        state.templateUrl = 'app/auth/views/' + views[i] + '.html';
      }
    }
  });
}

module.exports.setOverwriteViews = setOverwriteViews;