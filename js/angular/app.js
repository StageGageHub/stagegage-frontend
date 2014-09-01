var stagegage = angular.module('stagegage', [
    'ngRoute',
    'ui.sortable',
    'HomeControllers',
    'SplashControllers',
    'RankingsControllers',
    'AuthControllers',
    'MenuControllers',
    'CreateRankSelectShowControllers',
    'CreateRankRankControllers'
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
            .when('/create-rank/select-shows/festival/:festivalName', {
                templateUrl: 'partials/create-rank-select-shows.html',
                controller: 'CreateRankSelectShowsController'
            })
            .when('/create-rank/rank/festival/:festivalName', {
                templateUrl: 'partials/create-rank-rank.html',
                controller: 'CreateRankRankController'
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
                        element.css('width', span.prop('offsetWidth') + 180 + 'px');
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

stagegage.factory('festivals', function() {
   return ['coachella','ultra music festival','outside lands'];
});

stagegage.factory('getFestival', function() {
//    Mock for now
    return function(festivalName) {
        switch (festivalName) {
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
    };
});

stagegage.service('seenShows', function() {
    var seenShows = [];

    this.addShow = function (show) {
        seenShows.push(show);
    };

    this.removeShow = function (show) {
        var showIndex = seenShows.indexOf(show);
        if(showIndex >= 0) {
            seenShows.splice(showIndex, 1);
            return true;
        } else {
            return false;
        }
    };

    this.isShowPresent = function(show) {
        var showIndex = seenShows.indexOf(show);
        if(showIndex >= 0) {
            return true;
        } else {
            return false;
        }
    };

    this.hasShows = function() {
        if(seenShows.length < 1) {
            return false;
        } else {
            return true;
        }
    };

    this.get = function() {
        return seenShows;
    }
});

