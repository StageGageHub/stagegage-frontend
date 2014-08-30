var menuControllers = angular.module('CreateRankControllers', []);

menuControllers.controller('CreateRankController', function ($scope, $rootScope, $location, $window) {
    // Columns for show view
    var numColumns = 7;

    $scope.go = function (path) {
        console.log('Going to ' + path);
        $location.path( path );
    };

    $scope.festivals = ['coachella','ultra music festival','outside lands'];

    $scope.checkFestival = function(festival) {
        festival = festival.toLowerCase();
        isValid = false;
        angular.forEach($scope.festivals, function (expectedFestival) {
            if (expectedFestival === festival) isValid = true;
        });
        var inputEl = $window.document.getElementById("festival-input");
        if (isValid) {
            inputEl.style.borderColor = "rgb(0, 255, 252)";
        } else {
            inputEl.style.borderColor = 'red';
        }

        return isValid;
    };

    $rootScope.seenShows = [];

    $scope.updateFestival = function(festival) {
        festival = festival.toLowerCase();

        if($scope.checkFestival(festival)) {
            console.log('valid festival name ' + festival);

            var inputEl = $window.document.getElementById("festival-input");
            inputEl.style.borderColor = "rgb(0, 255, 209)";
            inputEl.style.backgroundColor = "rgb(255, 255, 255)";
            $scope.activeFestival = getFestival(festival);

            $rootScope.seenShows = [];
        } else {
            console.log('invalid festival name ' + festival);
        }
    };

    $scope.toggleSeenState = function(show) {
        if(show == null) return;

        var showIndex = $rootScope.seenShows.indexOf(show);
        // add if not present, and remove otherwise
        if(showIndex < 0) {
            console.log('adding ' + show + ' to seen shows');
            $rootScope.seenShows.push(show);
        } else {
            console.log('removing ' + show + ' from seen shows');
            $rootScope.seenShows.splice(showIndex, 1);
        }
        canGoNext();
    };

    //  Decide if class is highlighted using seenShows[]
    $scope.getShowStyle = function(show) {
        var isSeen = false;
        angular.forEach($rootScope.seenShows, function(seenShow) {
            if(seenShow === show) isSeen = true;
        });

        if(isSeen) {
            return 'selected-show';
        } else {
            return 'show'
        }
    };

    $scope.canGoNext = false;

    var canGoNext = function() {
        if ($scope.activeFestival == null || $rootScope.seenShows == null || $rootScope.seenShows.length == 0) {
            $scope.canGoNext = false;
        } else {
            console.log('can go next');
            $scope.canGoNext = true;
        }
    }


    function getFestival(festival) {
        // Lets mock for now
        switch (festival) {
            case "coachella":
                return {
                    'name':'coachella',
                    'shows': [
                        'artist1',
                        'artist2',
                        'great band',
                        'less cool',
                        'avicci',
                        'porter',
                        'backstreet boys',
                        'Arctic Monkeys',
                        'Aloe Blacc',
                        'Arcade Fire',
                        'Adele',
                        'Bastille',
                        'Beyonce',
                        'Blake Shelton',
                        'Bruno Mars',
                        'Brad Paisley',
                        'The Black Keys',
                        'B.O.B.',
                        'Beck',
                        'Big Sean'
                    ]
                };
                break;
            case "ultra music festival":
                return {
                    'name':'ultra music festival',
                    'shows': [
                        'artist1',
                        'artist2',
                        'porter',
                        'backstreet boys'
                    ]
                };
                break;
            case "outside lands":
                return {
                    'name':'outside lands',
                    'shows': [
                        'artist1',
                        'artist2',
                        'great band',
                        'less cool',
                        'porter',
                        'backstreet boys'
                    ]
                };
                break;
        }
    }
});