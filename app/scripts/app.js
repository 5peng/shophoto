'use strict';

/**
 * @ngdoc overview
 * @name shophotoApp
 * @description
 * # shophotoApp
 *
 * Main module of the application.
 */
angular
  .module('shophotoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ipCookie',
    'leaflet-directive'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl'
      })
      .when('/wall', {
        templateUrl: 'views/wall.html',
        controller: 'WallCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function () {
    AV.initialize(
      '10pj5jzbs5vrgx3s00txkls5am66rdg792scjimu77f5m7ml',
      '98ftsvflmrux4dexn01h2rhjuoaomdj21o5x5hf1rn1q25el');
  });
