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
    if (response.status === 'connected') {
      console.log('Authenticated user detected');
      var uid = response.authResponse.userID;
      // Log this shit (send UID to service)
      var accessToken = response.authResponse.accessToken;
      var authOverlay = document.getElementById('auth-overlay');
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

  var unauthorizedMessages =
        ['Looks like you\'ve stumbled somewhere you shouldn\'t be. Stagegage is currently in private beta. If you think this message is a mistake email us at Stagegage.com',
         'Dear Human,\n Congratulations!! You have found the entrance to the amazing place known in popular and religious culture known as \" heaven \". Please email me (g0d) at stagegage@gmail.com explaining why you deserve access. (disclaimer: scientologists and ISIS members need not apply)',
         'Unnfortunately if you are seeing this message you are part of the general public and as such are not privy to stagegage at this time. we will be opening up our site to the normal folk in the near future. Email us at stagegage@gmail.com if you think you should be given special treatment.',
         'I\'m sorry, the page you are trying to access is currently hibernating and will be emerging soon. Please refresh the page every 1-1000 hours for updates. Email us at stagegage@gmail.com if you\'re tired of refreshing'
        ];

  var message = unauthorizedMessages[Math.floor(Math.random() * (unauthorizedMessages.length + 1))];
  
  document.getElementById('auth-overlay') = message;
  console.log('updated unauthorized message');
}



