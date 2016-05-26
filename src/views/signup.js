var module = angular.module('src/auth/views/signup.html', []);
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/auth/views/signup.html',
    '<div class="container-fluid">\n' +
    '  <div class="page-header">\n' +
    '    <h1>Login</h1>\n' +
    '  </div>\n' +
    '  \n' +
    '  <div class="row">\n' +
    '    <div class="col-lg-12">\n' +
    '      <div class="panel">\n' +
    '        <div class="panel-heading">\n' +
    '          <h3 class="panel-title">Create your account to get started.</h3>\n' +
    '        </div>\n' +
    '        <div class="panel-body">\n' +
    '\n' +
    '          <form class="form-horizontal" name="form" ng-submit="vm.register(form)" novalidate>\n' +
    '            \n' +
    '            <div class="form-group" ng-class="{ \'has-success\': form.email.$valid && form.$submitted, \n' +
    '                                                    \'has-error\': form.email.$invalid && form.$submitted }">\n' +
    '              <label class="col-sm-2 control-label">Email</label>\n' +
    '                <div class="col-sm-8">\n' +
    '                  <input type="email" placeholder="Your Email" name="email" class="form-control"\n' +
    '                    ng-model="vm.user.email" \n' +
    '                    required \n' +
    '                    mongoose-error />\n' +
    '                  <span class="help-block" ng-show="form.email.$error.email && form.$submitted">Doesn\'t look like a valid email.</span>\n' +
    '                  <span class="help-block" ng-show="form.email.$error.required && form.$submitted">What\'s your email address?</span>\n' +
    '                  <span class="help-block" ng-show="form.email.$error.mongoose">{{vm.errors.email}}</span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group" ng-class="{ \'has-success\': form.password.$valid && form.$submitted, \n' +
    '                                                \'has-error\': form.password.$invalid && form.$submitted }">\n' +
    '              <label class="col-sm-2 control-label">Password</label>\n' +
    '                <div class="col-sm-8">\n' +
    '                  <input type="password" placeholder="Your Password" name="password" class="form-control"\n' +
    '                    ng-model="vm.user.password"\n' +
    '                    ng-minlength="3"\n' +
    '                    required\n' +
    '                    mongoose-error />\n' +
    '                  <span class="help-block" ng-show="(form.password.$error.minlength || form.password.$error.required) && form.$submitted">Password must be at least 3 characters.</span>\n' +
    '                  <span class="help-block" ng-show="form.password.$error.mongoose">{{vm.errors.password}}</span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group" ng-class="{ \'has-success\': form.confirmPassword.$valid && form.$submitted, \n' +
    '                                                \'has-error\': form.confirmPassword.$invalid && form.$submitted }">\n' +
    '              <label class="col-sm-2 control-label">Password</label>\n' +
    '                <div class="col-sm-8">\n' +
    '                  <input type="password" placeholder="Confirm Password" name="confirmPassword" class="form-control"\n' +
    '                    ng-model="vm.user.confirmPassword"\n' +
    '                    match="vm.user.password"\n' +
    '                    ng-minlength="3" \n' +
    '                    required />\n' +
    '                  <span class="help-block" ng-show="form.confirmPassword.$error.match && form.$submitted">Passwords must match.</span>\n' +
    '                  <span class="help-block" ng-show="form.confirmPassword.$error.required && form.$submitted">Confirm your password</span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group">\n' +
    '              <div class="col-sm-offset-2 col-sm-10">\n' +
    '                <button class="btn btn-inverse btn-lg btn-login" type="submit">Register</button>\n' +
    '                <a class="btn btn-default btn-lg btn-register" ui-sref="login({referrer:\'{{vm.referrer}}\'})">Already Have An Account?</a>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '\n' +
    '          </form>\n' +
    '\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
