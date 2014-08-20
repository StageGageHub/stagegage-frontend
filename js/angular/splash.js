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
    FB.getLoginStatus(function(response) {
      var authOverlay = document.getElementById('auth-overlay');
      if (response.status === 'connected') {
        console.log('Authenticated user detected');
        $scope.isAuthorized = true;
        // Log this shit (send UID to service)
        var uid = response.authResponse.userID;
        console.log('userID = ' + uid);
        var accessToken = response.authResponse.accessToken;
      } else {
        console.log('Unauthorized user detected');
        // Unauthorized user... 
      }
    });
  }
});
