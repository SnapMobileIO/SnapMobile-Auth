(function(module) {
try {
  module = angular.module('authApp');
} catch (e) {
  module = angular.module('authApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('authApp/auth/views/login.html',
    '<div class="container-fluid">\n' +
    '  <div class="page-header">\n' +
    '    <h1>Login</h1>\n' +
    '  </div>\n' +
    '  \n' +
    '  <div class="row">\n' +
    '    <div class="col-lg-12">\n' +
    '      <div class="panel">\n' +
    '        <div class="panel-heading">\n' +
    '          <h3 class="panel-title">Welcome! Login to your account.</h3>\n' +
    '        </div>\n' +
    '        <div class="panel-body">\n' +
    '\n' +
    '          <uib-alert ng-show="vm.errors.other && form.$submitted" type="warning">{{vm.errors.other}}</uib-alert>\n' +
    '\n' +
    '          <form class="form-horizontal" name="form" ng-submit="vm.login(form)" novalidate>\n' +
    '            \n' +
    '            <div class="form-group" ng-class="{ \'has-success\': form.email.$valid && form.$submitted, \n' +
    '                                                \'has-error\': form.email.$invalid && form.$submitted }">\n' +
    '              <label for="email" class="col-sm-2 control-label">Email</label>\n' +
    '              <div class="col-sm-8">                \n' +
    '                <input type="email" name="email" class="form-control" ng-model="vm.user.email" required>\n' +
    '                <span class="help-block" ng-show="form.email.$error.required && form.$submitted">What\'s your email address?</span>\n' +
    '                <span class="help-block" ng-show="form.email.$error.mongoose">{{vm.errors.email}}</span>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group" ng-class="{ \'has-success\': form.password.$valid && form.$submitted, \n' +
    '                                                \'has-error\': form.password.$invalid && form.$submitted }">\n' +
    '              <label for="password" class="col-sm-2 control-label">Password</label>\n' +
    '              <div class="col-sm-8">                \n' +
    '                <input type="password" name="password" class="form-control" ng-model="vm.user.password" required>\n' +
    '                <span class="help-block" ng-show="form.password.$error.required && form.$submitted">Add your password</span>\n' +
    '                <span class="help-block" ng-show="form.password.$error.mongoose">{{vm.errors.password}}</span>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group">\n' +
    '              <div class="col-sm-offset-2 col-sm-10">\n' +
    '                <button class="btn btn-inverse btn-lg btn-login" type="submit">Login</button>\n' +
    '                <a class="btn btn-default btn-lg btn-register" ui-sref="signup({referrer:\'{{vm.referrer}}\'})">Register</a>\n' +
    '                <a class="btn btn-default btn-lg btn-register" ui-sref="forgot">Password Reset</a>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '\n' +
    '          </form>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();
