'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.searchPage',
    'myApp.version',
    'ngAnimate',
    'ngMaterial'
]).config([
    '$locationProvider',
    '$routeProvider',
    '$mdIconProvider',
    function ($locationProvider, $routeProvider, $mdIconProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/'});
        $mdIconProvider.icon('logo', 'assets/logo.svg');
    }
]);
