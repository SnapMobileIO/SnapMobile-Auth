'use strict';

function MatchDirective() {
  return {
    require: 'ngModel',
    scope: {
      match: '=',
      value: '=ngModel'
    },
    link: function(scope, elem, attrs, ctrl) {
      scope.$watch('value', () => {
        if (scope.value !== scope.match) {
          ctrl.$setValidity('match', false);
        } else {
          ctrl.$setValidity('match', true);
        }
      });
    }
  };
}

export { MatchDirective };
