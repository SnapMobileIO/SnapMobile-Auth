'use strict';

/**
 * Router Decorator
 * Note that this is using ui-router 0.2.x, which still uses the $stateChange* event
 * This is deprecated in 1.0+ in favor of $transition.on* hooks
 * More info: https://github.com/angular-ui/ui-router/issues/2655
 * Previously implemented version: https://github.com/SnapMobileIO/SnapJS/blob/aa8e3fe64f37fcf1ddc82851186a68c96c431c66/client/components/auth/router.decorator.js
 */
angular.module('AuthModule')
  .run((Auth, $rootScope, $state) => {

    /**
     * Listen to when the state changes to hijack it and confirm user authentication
     * Add `authenticate: true` or `authenticateRole: 'role'` to your state
     * @param {Object} event    The event that triggered the change
     * @param {Object} toState  The state object information
     */
    $rootScope.$on('$stateChangeStart', (event, toState) => {

      Auth.initializeCurrentUser(() => {
        /**
         * If `authenticate: true` is set in state, ensure user is logged in
         */
        if (!!toState.authenticate) {
          if (!Auth.isLoggedIn()) {
            event.preventDefault();
            $state.go('login');
          }
        }

        /**
         * If `authenticateRole: 'role'` is set in state, ensure user is logged in and has the correct role
         */
        if (!!toState.authenticateRole && typeof toState.authenticateRole === 'string') {
          if (!Auth.hasRole(toState.authenticateRole)) {
            event.preventDefault();
            $state.go('login');
          }
        }
      });
    });

  });
