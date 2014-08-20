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
        authOverlay.style.width = 0;
        authOverlay.style.height = 0;
        authOverlay.style.display = 'none';
      } else {
        console.log('Unauthorized user detected');
        // Unauthorized user... 
        authOverlay.style.width = 100;
        authOverlay.style.height = 100;
        authOverlay.style.display = 'inline';
      }
    });
  }
});
