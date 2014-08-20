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

  $scope.toRank = {
    'name':''
  };

  $scope.futureFestivalRank = {
    'name':''
  };



  $scope.redirectToCreateRank = function(festivaName) {
    
    var isValid = false;
    angular.forEach($scope.festivals, function(expectedName) {
      if(festivaName == expectedName)
        isValid = true;
    });

    if(isValid) {
      var url = 'http://stagegage.com/create-rank.html?festival=' + festivaName;
      console.log('redirecting to: ' + url);
      window.location.href = url;
    } else {
      console.log('invalid festival name');
    }
  };

  $scope.redirectToRankings = function(festivaName) {
    
    var isValid = false;
    angular.forEach($scope.festivals, function(expectedName) {
      if(festivaName == expectedName)
        isValid = true;
    });

    if(isValid) {
      var url = 'http://stagegage.com/rankings.html?festival=' + festivaName;
      console.log('redirecting to: ' + url);
      window.location.href = url;
    } else {
      console.log('invalid festival name');
    }
  };

});



