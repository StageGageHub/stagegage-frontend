var stagegage = angular.module('stagegage', []);

stagegage.controller('RankingsController', function ($scope) {
  $scope.ranks = [
    { 'name': 'THE BEST BAND', 
	  'genres' : ['rock', 'pop', 'electro'],
	  'festivals' : ['ultra music festival', 'outside lands', 'coachella']
	},
    { 'name': 'ALMOST BEST BAND', 
	  'genres' : ['rock', 'metal', 'death metal'],
	  'festivals' : ['ultra music festival', 'outside lands', 'coachella']
	},
    { 'name': 'EH THEY\'RE OK', 
	  'genres' : ['electronic', 'house', 'deep house'],
	  'festivals' : ['ultra music festival', 'coachella']
	},
	{ 'name': 'THE BEST BAND', 
	  'genres' : ['rock', 'pop', 'electro'],
	  'festivals' : ['ultra music festival', 'coachella']
	},
    { 'name': 'ALMOST BEST BAND', 
	  'genres' : ['rock', 'pop', 'electro'],
	  'festivals' : ['ultra music festival', 'coachella']
	},
    { 'name': 'EH THEY\'RE OK', 
	  'genres' : ['rock', 'pop', 'electro'],
	  'festivals' : ['outside lands', 'coachella']
	},
    { 'name': 'THE BEST BAND', 
	  'genres' : ['rock', 'pop', 'electro'],
	  'festivals' : ['ultra music festival', 'coachella']
	},
    { 'name': 'ALMOST BEST BAND', 
	  'genres' : ['rock', 'metal', 'death metal'],
	  'festivals' : ['coachella']
	},
    { 'name': 'EH THEY\'RE OK', 
	  'genres' : ['electronic', 'house', 'deep house'],
	  'festivals' : ['ultra music festival', 'outside lands', 'coachella']
	},
	{ 'name': 'THE BEST BAND', 
	  'genres' : ['rock', 'pop', 'electro'],
	  'festivals' : ['ultra music festival', 'outside lands', 'coachella']
	},
    { 'name': 'ALMOST BEST BAND', 
	  'genres' : ['rock', 'pop', 'electro'],
	  'festivals' : ['ultra music festival', 'coachella']
	},
    { 'name': 'EH THEY\'RE OK', 
	  'genres' : ['rock', 'pop', 'electro'],
	  'festivals' : ['ultra music festival', 'outside lands', 'coachella']
	}
  ];

  $scope.festivals = [
  	'ultra music festival',
  	'outside lands',
  	'coachella',
  ];

  $scope.genres = [
  	'rock',
  	'pop',
  	'hip hop',
  	'electronic',
  	'rap',
  	'country',
  ]
});
