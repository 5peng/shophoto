'use strict';

/**
 * @ngdoc function
 * @name shophotoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shophotoApp
 */
angular.module('shophotoApp')
  .controller('MainCtrl', function ($scope, $cookies, UserLogin) {

    UserLogin.check();

    // Get latlng
    // Get nearest address name

    // Submit form
    // Store file, user, address name & latlng
  });
