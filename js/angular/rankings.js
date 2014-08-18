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
  ];

  $scope.filteredGenres = [''];

  $scope.addToFilteredGenres = function(genre) {
  	console.log('adding genre filter: ' + genre);
  	if($scope.filteredGenres.indexOf(genre) < 0)	
  		$scope.filteredGenres.push(genre);
  	console.log('filter added');
  };

  $scope.removeFromFilteredGenres = function(genre) {
  	console.log('removing genre filter: ' + genre);
  	$scope.filteredGenres.pop(genre);
  	console.log('filter removed');
  };
});


stagegage.filter('filterByGenre', function() {
	return function(ranks, filteredGenres) {
		// Don't filter if only the placeholder [''] is present
		if(filteredGenres.length == 1)
			return ranks;

		console.log('attempting to filter ' + ranks.length + ' ranks');
		var filtered = [];

		console.log('genres in filter: ');
		angular.forEach(filteredGenres, function(genre) {
			console.log(genre);
		});

		angular.forEach(ranks, function(rank) {
			var genres = rank.genres;
			var matchCount = 0;
			angular.forEach(genres, function(genre) {
				if(filteredGenres.indexOf(genre) >= 0) {
					console.log('matched genre ' + genre);
					matchCount++;
				}
			});
			if(matchCount == filteredGenres.length - 1) {
				console.log('pushing rank: ' + rank.name);
				filtered.push(rank);
			}
		});

		return filtered;
	}
});