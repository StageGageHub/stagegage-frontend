var createRankSelectShowControllers = angular.module('CreateRankSelectShowControllers', []);

createRankSelectShowControllers.controller('TextBoxController', function($scope, $rootScope, $window, $routeParams, getFestival, activeFestival) {
    // Pulled from url
    var festivalName = $routeParams.festivalName;

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

    $scope.updateFestival = function(festival) {
        festival = festival.toLowerCase();

        if($scope.checkFestival(festival)) {
            console.log('valid festival name ' + festival);

            var inputEl = $window.document.getElementById("festival-input");
            inputEl.style.borderColor = "rgb(0, 255, 209)";
            inputEl.style.backgroundColor = "rgb(255, 255, 255)";
            activeFestival.set(getFestival(festival));

            $rootScope.seenShows = [];
        } else {
            console.log('invalid festival name ' + festival);
        }
    };

    $scope.updateInput = function() {
        if(festivalName != null) {
            console.log("filling festivalToRank");
            $scope.festivalToRank = festivalName;
            $scope.updateFestival(festivalName);
        }
    };

//    Call any init
    $scope.updateInput();
});

createRankSelectShowControllers.controller('CreateRankSelectShowsController', function ($scope, $rootScope, $location, festivals, getFestival, activeFestival, seenShows) {
    //$rootScope.seenShows = [];

    $scope.festivals = festivals;
    $scope.rankList = [];
    $scope.go = function (path) {
        console.log('Going to ' + path);
        $location.path( path );
    };

    $scope.toggleSeenState = function(show) {
        if(show == null) return;

        if(seenShows.isShowPresent(show)) {
            console.log('removing ' + show + ' from seen shows');
            seenShows.removeShow(show);
        } else {
            console.log('adding ' + show + ' to seen shows');
            seenShows.addShow(show);
        }

        // update next button
        canGoNext();
    };

    // Should we highlight show?
    $scope.getShowStyle = function(show) {
        if(seenShows.isShowPresent(show)) {
            return 'selected-show';
        } else {
            return 'show'
        }
    };

    // Should we show next button?
    $scope.canGoNext = false;
    var canGoNext = function() {
        if (activeFestival.get() == null || !seenShows.hasShows()) {
            $scope.canGoNext = false;
        } else {
            $scope.canGoNext = true;
        }
    };

});

createRankSelectShowControllers.service('activeFestival', ["$rootScope", function($rootScope) {
    $rootScope.activeFestival = {};

    this.set = function(festival) {
        $rootScope.activeFestival = festival;
    };

    this.get = function() {
        return $rootScope.activeFestival;
    };
}]);