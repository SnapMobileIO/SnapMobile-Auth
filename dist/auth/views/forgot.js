(function(module) {
try {
  module = angular.module('authApp');
} catch (e) {
  module = angular.module('authApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/auth/views/forgot.html',
    '<div class="container-fluid">\n' +
    '  <div class="page-header">\n' +
    '    <h1>Forgot Password</h1>\n' +
    '  </div>\n' +
    '  \n' +
    '  <div class="row">\n' +
    '    <div class="col-lg-12">\n' +
    '      <div class="panel">\n' +
    '        <div class="panel-heading">\n' +
    '          <h3 class="panel-title">Did you forget your password? That\'s ok. We\'ll email you instructions on how to reset your password.</h3>\n' +
    '        </div>\n' +
    '        <div class="panel-body">\n' +
    '          <uib-alert ng-if="vm.message" type="success">{{vm.message}}</uib-alert>          \n' +
    '          <uib-alert ng-repeat="error in vm.errors" ng-show="vm.errors && form.$submitted" type="warning">{{error}}</uib-alert>\n' +
    '\n' +
    '          <form class="form-horizontal" name="form" ng-submit="vm.forgotPassword(form)" novalidate>\n' +
    '\n' +
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
    '            <div class="form-group">\n' +
    '              <div class="col-sm-offset-2 col-sm-10">\n' +
    '                <button class="btn btn-inverse btn-lg btn-login" type="submit" ng-disabled="form.$invalid">Send</button>\n' +
    '                <a class="btn btn-default btn-lg btn-register" ui-sref="login">Nevermind</a>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </form>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();
