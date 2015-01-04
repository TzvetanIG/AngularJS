'use strict';
var videoApp = angular.module('videoApp', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/add', {
                templateUrl: 'partials/add-form.html'
            })
            .when('/', {
                templateUrl: 'partials/video.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
