'use strict';

import { User } from './user.service';
import { Auth } from './auth.service';
import { LoginController } from './login.controller';
import { SignupController } from './signup.controller';
import { PasswordController } from './password.controller';
import { ForgotController } from './forgot.controller';
import { ResetController } from './reset.controller';
import { MatchDirective } from './match.directive';

const app = angular.module('app', 'ui.router');

app.service('User', User);
app.service('Auth', Auth);
app.directive('match', MatchDirective);
app.controller('LoginController', LoginController);
app.controller('SignupController', SignupController);
app.controller('PasswordController', PasswordController);
app.controller('ForgotController', ForgotController);
app.controller('ResetController', ResetController);

app.config($stateProvider => {
  $stateProvider
    .state('login', {
      url: '/login?referrer',
      templateUrl: 'app/auth/views/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    })
    .state('logout', {
      url: '/logout',
      templateUrl: 'app/auth/views/login.html',
      controller: ($state, Auth) => {
        Auth.logout();
        $state.go('login');
      }
    })
    .state('signup', {
      url: '/signup?referrer',
      templateUrl: 'app/auth/views/signup.html',
      controller: 'SignupController',
      controllerAs: 'vm'
    })
    .state('password', {
      url: '/password',
      templateUrl: 'app/auth/views/password.html',
      controller: 'PasswordController',
      controllerAs: 'vm',
      authenticate: true
    })
    .state('forgot', {
      url: '/forgot',
      templateUrl: 'app/auth/views/forgot.html',
      controller: 'ForgotController',
      controllerAs: 'vm'
    })
    .state('reset', {
      url: '/reset/:token',
      templateUrl: 'app/auth/views/reset.html',
      controller: 'ResetController',
      controllerAs: 'vm'
    });
});
