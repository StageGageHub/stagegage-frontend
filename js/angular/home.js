var stagegage = angular.module('stagegage', []);

stagegage.controller('RankingsController', function ($scope) {
  $scope.ranks = [
    {'name': 'THE BEST BAND',
     'number': '1'
 	},
    {'name': 'ALMOST BEST BAND',
     'number': '2'
 	},
    {'name': 'EH THEY\'RE OK',
     'number': '3'
 	}
  ];

  $scope.genres = [
	  {	'name':'ROCK' },
	  {	'name':'POP'  },
	  {	'name':'ELECTRO' }
     ]
});