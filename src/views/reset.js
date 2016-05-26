var module = angular.module('src/auth/views/reset.html', []);
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/auth/views/reset.html',
    '<div class="container-fluid">\n' +
    '  <div class="page-header">\n' +
    '    <h1>Reset Your Password</h1>\n' +
    '  </div>\n' +
    '  \n' +
    '  <div class="row">\n' +
    '    <div class="col-lg-12">\n' +
    '      <div class="panel">\n' +
    '        <div class="panel-heading">\n' +
    '          <h3 class="panel-title">Choose a new password.</h3>\n' +
    '        </div>\n' +
    '        <div class="panel-body">\n' +
    '\n' +
    '          <form class="form" name="form" ng-submit="vm.resetPassword(form)" novalidate>\n' +
    '            <p ng-if="vm.message" class="bg-success">{{vm.message}} <a ui-sref="login">Login &rarr;</a></p>\n' +
    '            <span ng-if="vm.errors">\n' +
    '              <p ng-repeat="error in vm.errors" class="bg-danger">{{error}}</p>\n' +
    '            </span>\n' +
    '\n' +
    '            <div class="form-group" ng-class="{ \'has-success\': form.password.$valid && form.$submitted,\n' +
    '                                                \'has-error\': form.password.$invalid && form.$submitted }">\n' +
    '              <label>Password</label>\n' +
    '\n' +
    '              <input type="password" name="password" class="form-control" ng-model="vm.user.password"\n' +
    '                     ng-minlength="3"\n' +
    '                     required\n' +
    '                     mongoose-error/>\n' +
    '              <p class="help-block"\n' +
    '                 ng-show="(form.password.$error.minlength || form.password.$error.required) && form.$submitted">\n' +
    '                Password must be at least 3 characters.\n' +
    '              </p>\n' +
    '              <p class="help-block" ng-show="form.password.$error.mongoose">\n' +
    '                {{vm.errors.password}}\n' +
    '              </p>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group" ng-class="{ \'has-success\': form.confirmPassword.$valid && form.$submitted,\n' +
    '                                                \'has-error\': form.confirmPassword.$invalid && form.$submitted }">\n' +
    '              <label>Confirm Password</label>\n' +
    '              <input type="password" name="confirmPassword" class="form-control" ng-model="vm.user.confirmPassword"\n' +
    '                     match="vm.user.password"\n' +
    '                     ng-minlength="3" required/>\n' +
    '              <p class="help-block"\n' +
    '                 ng-show="form.confirmPassword.$error.match && form.$submitted">\n' +
    '                Passwords must match.\n' +
    '              </p>\n' +
    '            </div>\n' +
    '\n' +
    '            <div>\n' +
    '              <button class="btn btn-inverse btn-lg btn-login" type="submit">\n' +
    '                Send\n' +
    '              </button>\n' +
    '            </div>\n' +
    '          </form>\n' +
    '\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
