'use strict';

import { User } from './user.service';
import { Auth } from './auth.service';
import { LoginController } from './login.controller';
import { SignupController } from './signup.controller';
import { PasswordController } from './password.controller';
import { ForgotController } from './forgot.controller';
import { ResetController } from './reset.controller';
import { MatchDirective } from './match.directive';

const app = angular.module('authApp', ['ui.router']);

app.service('User', User);
app.service('Auth', Auth);
app.directive('match', MatchDirective);
app.controller('LoginController', LoginController);
app.controller('SignupController', SignupController);
app.controller('PasswordController', PasswordController);
app.controller('ForgotController', ForgotController);
app.controller('ResetController', ResetController);

require('./views/forgot.js');
require('./views/login.js');
require('./views/password.js');
require('./views/reset.js');
require('./views/signup.js');

function setOverwriteViews(views) {
  app.config(($stateProvider) => {
    $stateProvider
      .state('login', {
        url: '/login?referrer',
        templateUrl: (views.login ? 'app' : 'authApp') + '/auth/views/login.html',
        controller: 'LoginController',
        controllerAs: 'vm',
        parent: 'app'
      })
      .state('logout', {
        url: '/logout',
        templateUrl: 'app/auth/views/login.html',
        parent: 'app',
        controller: ($state, Auth) => {
          Auth.logout();
          $state.go('login');
        }
      })
      .state('signup', {
        url: '/signup?referrer&r',
        templateUrl: (views.signup ? 'app' : 'authApp') + '/auth/views/signup.html',
        controller: 'SignupController',
        controllerAs: 'vm',
        parent: 'app'
      })
      .state('password', {
        url: '/password',
        templateUrl: (views.password ? 'app' : 'authApp') + '/auth/views/password.html',
        controller: 'PasswordController',
        controllerAs: 'vm',
        authenticate: true,
        parent: 'app'
      })
      .state('forgot', {
        url: '/forgot',
        templateUrl: (views.forgot ? 'app' : 'authApp') + '/auth/views/forgot.html',
        controller: 'ForgotController',
        controllerAs: 'vm',
        parent: 'app'
      })
      .state('reset', {
        url: '/reset/:token',
        templateUrl: (views.reset ? 'app' : 'authApp') + '/auth/views/reset.html',
        controller: 'ResetController',
        controllerAs: 'vm',
        parent: 'app'
      });
  });
}

module.exports.setOverwriteViews = setOverwriteViews;
