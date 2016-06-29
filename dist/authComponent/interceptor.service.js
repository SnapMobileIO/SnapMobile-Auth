'use strict';

angular.module('AuthModule').factory('AuthInterceptor', AuthInterceptor);

function AuthInterceptor($q, $cookies, $injector) {
  var state = void 0;
  var service = {
    request: request,
    responseError: responseError
  };
  return service;

  /**
   * Auth intereceptor to add authorization headers to requests
   * Skip adding Authorization header by adding `skipAuthorization: true` to request
   * @param {Object} config Angular config object
   */
  function request(config) {
    config.headers = config.headers || {};
    if ($cookies.get('token') && !config.skipAuthorization) {
      config.headers.Authorization = 'Bearer ' + $cookies.get('token');
    }

    return config;
  }

  /**
   * Intercepts 401 errors and redirects to the login state
   * @param  {Object} response The http response object
   * @return {Promise}         The rejected promise
   */
  function responseError(response) {
    if (response.status === 401) {
      (state || (state = $injector.get('$state'))).go('signup');

      // Remove any stale tokens
      $cookies.remove('token');
    }

    return $q.reject(response);
  }
}