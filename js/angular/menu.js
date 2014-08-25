var menuControllers = angular.module('MenuControllers', []);

menuControllers.controller('MenuController', function ($scope, $location) {
    $scope.go = function (path) {
        console.log('Going to ' + path);
        $location.path( path );
    };
});




