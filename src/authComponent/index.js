'use strict';

import 'angular-cookies';

angular.module('AuthModule', ['ngCookies'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });

/**
 * FIXME: Can't get interceptor to work as a Class
 */
require('./router.decorator');
require('./interceptor.service');
