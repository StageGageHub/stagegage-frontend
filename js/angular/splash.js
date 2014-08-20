var stagegage = angular.module('stagegage', []);

stagegage.controller('SplashController', function ($scope) {
  console.log('temporarily unauthorizing user');
  $scope.isAuthorized = false;
  
  window.fbAsyncInit = function onFBLoad() {
    console.log('initializing FB');
    FB.init({
      appId      : '271053079752670',
      status     : true,
      xfbml      : true,
      version    : 'v2.0'
    });

    // FB.Event.subscribe('auth.authResponseChange', auth_response_change_callback);
    FB.Event.subscribe('auth.statusChange', auth_status_change_callback);
  }

  var auth_status_change_callback = function(response) {
    console.log("auth_status_change_callback: " + response.status);
    if (response.status === 'connected') {
      console.log('Authenticated user detected');
      // Should trigger angular reload
      $scope.$apply(function () {
        $scope.isAuthorized = true;
      });
      // Log this shit (send UID to service)
      var uid = response.authResponse.userID;
      console.log('userID = ' + uid);
      var accessToken = response.authResponse.accessToken;
    } else {
      console.log('Unauthorized user detected');
      $scope.isAuthorized = false;
    }
  }
});

// var auth_response_change_callback = function(response) {
//   console.log("auth_response_change_callback");
//   console.log(response);
// }
