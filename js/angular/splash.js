var splashControllers = angular.module('SplashControllers', []);

splashControllers.controller('SplashController', function ($document, $scope, $rootScope) {
    console.log("hiding menu, overlay, and footer");
    // Here we hide menu and footer for this view :-(
    $rootScope.hideMenu = true;
    $rootScope.hideOverlay = true;
    $rootScope.hideFooter = true;
    $document[0].body.style.backgroundColor = '#252525';

    $scope.$on("$destroy", function(){
        $rootScope.hideMenu = false;
        $rootScope.hideOverlay = false;
        $rootScope.hideFooter = false;
        $document[0].body.style.backgroundColor = '#F4F4F4';
    });

    $scope.go = function (path) {
        console.log('Going to ' + path);
        $location.path( path );
    };
});
