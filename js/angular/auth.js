var authControllers = angular.module('AuthControllers', []);

authControllers.controller('AuthController', function ($scope) {
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

    FB.Event.subscribe('auth.statusChange', authStatusChangeCallback);
    // authStatusChangeCallback(FB.getAuthResponse);

    FB.getLoginStatus(function(response) {
      var authOverlay = document.getElementById('auth-overlay');
      if (response.status === 'connected') {
        console.log('Authenticated user detected');
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


  console.log('attempting to update unauthorized message');
  var unauthorizedMessages =
        ['Looks like you\'ve stumbled somewhere you shouldn\'t be. Stagegage is currently in private beta. \nIf you think this message is a mistake email us at Stagegage.com',
         'Dear Human,\n Congratulations!! You have found the entrance to the amazing place known in popular and religious culture known as \" heaven \". Please email me (g0d) at stagegage@gmail.com explaining why you deserve access. \n(disclaimer: scientologists and ISIS members need not apply)',
         'Unnfortunately if you are seeing this message you are part of the general public and as such are not privy to stagegage at this time. we will be opening up our site to the normal folk in the near future. \nEmail us at stagegage@gmail.com if you think you should be given special treatment.',
         'I\'m sorry, the page you are trying to access is currently hibernating and will be emerging soon. Please refresh the page every 1-1000 hours for updates. Email us at stagegage@gmail.com if you\'re tired of refreshing',
         'Stagegage has 99 problems but you accessing our site ain\'t one. Come back later. \n(email us at stagegage@gmail.com if you think you should, in fact, be a problem).'
        ];

  var randIndex = Math.floor(Math.random() * (unauthorizedMessages.length));
  var message = unauthorizedMessages[randIndex];

  $scope.unauthorizedMessage = message;
  console.log('updated unauthorized message');


  var authStatusChangeCallback = function(response) {
    console.log("auth_status_change_callback: " + response.status);

    var authOverlay = window.document.getElementById('auth-overlay');
    if (response.status === 'connected') {
      console.log('Authenticated user detected');
      $scope.$apply(function () {
        if(authOverlay != null) {  
          authOverlay.style.width = 0;
          authOverlay.style.height = 0;
          authOverlay.style.display = 'none';
        }
        $scope.isAuthorized = true;
      });
      // Log this shit (send UID to service)
      var uid = response.authResponse.userID;
      console.log('userID = ' + uid);
      var accessToken = response.authResponse.accessToken;
    } else {
      console.log('Unauthorized user detected');
      $scope.$apply(function () {
        if(authOverlay != null) {
          authOverlay.style.width = 100;
          authOverlay.style.height = 100;
          authOverlay.style.display = 'inline';
        }
        $scope.isAuthorized = false;
      });
    }
  }
});