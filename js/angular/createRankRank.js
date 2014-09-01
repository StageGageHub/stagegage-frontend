var createRankRank = angular.module('CreateRankRankControllers', []);

createRankRank.controller('CreateRankRankController', function ($scope, $rootScope, $routeParams, $location, $window, seenShows) {
    var festivalName = $routeParams.festivalName;
    $scope.rankList = seenShows.get();

    $scope.go = function (path) {
        console.log('Going to ' + path);
        $location.path( path );
    };

    $scope.todoSortable = {
        containment : "parent",//Dont let the user drag outside the parent
        cursor : "move",//Change the cursor icon on drag
        tolerance : "pointer"//Read http://api.jqueryui.com/sortable/#option-tolerance
    };
});