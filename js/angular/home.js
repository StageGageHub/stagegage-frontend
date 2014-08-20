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



