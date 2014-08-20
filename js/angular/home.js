var stagegage = angular.module('stagegage', []);

stagegage.controller('HomeController', function ($scope) {
  $scope.highlight =
    {'title': 'NEXT FESTIVAL',
     'img': 'img/outside-lands.jpg',
     'ranks': [
        { 'name': 'THE BEST BAND', 
          'genres' : ['rock', 'pop', 'electro'],
          'festivals' : ['ultra music festival', 'outside lands', 'coachella']
        },
        { 'name': 'ALMOST BEST BAND', 
          'genres' : ['rock', 'metal', 'death metal'],
          'festivals' : ['ultra music festival', 'outside lands', 'coachella']
        },
        { 'name': 'ALMOST BEST BAND', 
          'genres' : ['rock', 'metal', 'death metal'],
          'festivals' : ['ultra music festival', 'outside lands', 'coachella']
        },
        { 'name': 'ALMOST BEST BAND', 
          'genres' : ['rock', 'metal', 'death metal'],
          'festivals' : ['ultra music festival', 'outside lands', 'coachella']
        },
        { 'name': 'ALMOST BEST BAND', 
          'genres' : ['rock', 'metal', 'death metal'],
          'festivals' : ['ultra music festival', 'outside lands', 'coachella']
        },
        { 'name': 'ALMOST BEST BAND', 
          'genres' : ['rock', 'metal', 'death metal'],
          'festivals' : ['ultra music festival', 'outside lands', 'coachella']
        },
        { 'name': 'ALMOST BEST BAND', 
          'genres' : ['rock', 'metal', 'death metal'],
          'festivals' : ['ultra music festival', 'outside lands', 'coachella']
        }
        ]
    };

  $scope.festivals = [
    'ultra music festival',
    'outside lands',
    'coachella',
  ];
});


window.fbAsyncInit = function onFBLoad() {
    console.log('initializing FB');
    FB.init({
      appId      : '271053079752670',
      status     : true,
      xfbml      : true,
      version    : 'v2.0'
    });

  console.log('In fbAsyncInit');
  FB.getLoginStatus(function(response) {
    if (!response.status === 'connected') {
      console.log('Authenticated user detected');
      var uid = response.authResponse.userID;
      // Log this shit (send UID to service)
      var accessToken = response.authResponse.accessToken;
      var authOverlay = document.getElementById('auth-overlay');
      authOverlay.style.opacity = 0;
      authOverlay.style.width = 0;
      authOverlay.style.height = 0;
    } else {
      console.log('Unauthorized user detected');
      // Unauthorized user... 
      authOverlay.style.opacity = 100;
      authOverlay.style.width = 100;
      authOverlay.style.height = 100;
    }
  });
}

