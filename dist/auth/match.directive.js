'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function MatchDirective() {
  return {
    require: 'ngModel',
    scope: {
      match: '=',
      value: '=ngModel'
    },
    link: function link(scope, elem, attrs, ctrl) {
      scope.$watch('value', function () {
        if (scope.value !== scope.match) {
          ctrl.$setValidity('match', false);
        } else {
          ctrl.$setValidity('match', true);
        }
      });
    }
  };
}

exports.MatchDirective = MatchDirective;