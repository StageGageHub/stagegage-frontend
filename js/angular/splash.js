var splashControllers = angular.module('SplashControllers', []);

splashControllers.controller('SplashController', function ($document, $scope, $rootScope) {
    // Here we hide menu and footer for this view :-(
    $rootScope.hideMenu = true;
    $rootScope.hideFooter = true;
    $document[0].body.style.backgroundColor = '#252525';

    $scope.$on("$destroy", function(){
        $rootScope.hideMenu = false;
        $rootScope.hideFooter = false;
        $document[0].body.style.backgroundColor = '#F4F4F4';
    });
});
