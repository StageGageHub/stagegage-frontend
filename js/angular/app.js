var stagegage = angular.module('stagegage', [
    'ngRoute',
    'HomeControllers',
    'SplashControllers',
    'RankingsControllers',
    'AuthControllers',
    'MenuControllers'
]);

stagegage.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'HomeController'
            })
            .when('/rankings', {
                templateUrl: 'partials/rankings.html',
                controller: 'RankingsController'
            })
            .when('/rankings/festival/:festivalName', {
                templateUrl: 'partials/rankings.html',
                controller: 'RankingsController'
            })
            .when('/splash', {
                templateUrl: 'partials/splash.html',
                controller: 'SplashController'
            })
            .when('/about-us', {
                templateUrl: "partials/about-us.html",
                controller: ''
            })
            .otherwise({
                redirectTo: '/home'
            });
    }
]);