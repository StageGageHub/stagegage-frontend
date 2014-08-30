var stagegage = angular.module('stagegage', [
    'ngRoute',
    'HomeControllers',
    'SplashControllers',
    'RankingsControllers',
    'AuthControllers',
    'MenuControllers',
    'CreateRankControllers'
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
            .when('/create-rank/select-shows', {
                templateUrl: 'partials/create-rank-select-shows.html',
                controller: 'CreateRankController'
            })
            .when('/create-rank/rank/festival/:festivalName', {
                templateUrl: 'partials/create-rank-rank.html',
                controller: 'CreateRankController'
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
                redirectTo: '/splash'
            });
    }
]);


// https://gist.github.com/mbenford/8016984
stagegage.directive('autosize', function($document) {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            var placeholder, span, resize;

            placeholder = element.attr('placeholder') || '';

            span = angular.element('<span></span>');
            span[0].style.cssText = getComputedStyle(element[0]).cssText;
            span.css('display', 'none')
                .css('visibility', 'hidden')
                .css('width', 'auto');

            $document.find('body').append(span);

            resize = function(value) {
                if(value != undefined) {
                    if (value.length < placeholder.length) {
                        value = placeholder;
                    }
                    span.text(value);
                    span.css('display', '');
                    try {
                        element.css('width', span.prop('offsetWidth') + 60 + 'px');
                    }
                    finally {
                        span.css('display', 'none');
                    }
                }
            };

            ctrl.$parsers.unshift(function(value) {
                resize(value);
                return value;
            });

            ctrl.$formatters.unshift(function(value) {
                resize(value);
                return value;
            })
        }
    };
});
