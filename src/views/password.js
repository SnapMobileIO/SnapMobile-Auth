var module = angular.module('src/auth/views/password.html', []);
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/auth/views/password.html',
    '<div class="container">\n' +
    '  <div class="row">\n' +
    '    <div class="col-sm-12">\n' +
    '      <h1>Change Password</h1>\n' +
    '    </div>\n' +
    '    <div class="col-sm-12">\n' +
    '      <form class="form" name="form" ng-submit="vm.changePassword(form)" novalidate>\n' +
    '\n' +
    '        <div class="form-group">\n' +
    '          <label>Current Password</label>\n' +
    '          <input type="password" name="password" class="form-control" ng-model="vm.user.oldPassword"\n' +
    '            mongoose-error/>\n' +
    '          <p class="help-block">{{ vm.errors.other }}</p>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group">\n' +
    '          <label>New Password</label>\n' +
    '          <input type="password" name="newPassword" class="form-control" ng-model="vm.user.newPassword"\n' +
    '            ng-minlength="3"\n' +
    '            required/>\n' +
    '          <p class="help-block"\n' +
    '            ng-show="(form.newPassword.$error.minlength || form.newPassword.$error.required) && (form.newPassword.$dirty || form.$submitted)">\n' +
    '            Password must be at least 3 characters.\n' +
    '          </p>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group">\n' +
    '          <label>Confirm New Password</label>\n' +
    '          <input type="password" name="confirmPassword" class="form-control" ng-model="vm.user.confirmPassword"\n' +
    '            match="vm.user.newPassword"\n' +
    '            ng-minlength="3"\n' +
    '            required/>\n' +
    '\n' +
    '          <p class="help-block"\n' +
    '            ng-show="(form.confirmPassword.$error.match) && (form.confirmPassword.$dirty || form.$submitted)">\n' +
    '            Passwords must match.\n' +
    '          </p>\n' +
    '        </div>\n' +
    '\n' +
    '        <p class="help-block"> {{ vm.message }} </p>\n' +
    '\n' +
    '        <button class="btn btn-lg btn-primary" type="submit" ng-disabled="form.$invalid">Save changes</button>\n' +
    '      </form>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
