'use strict';

/**
 * @ngdoc function
 * @name shophotoApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the shophotoApp
 */
angular.module('shophotoApp')
  .controller('LogoutCtrl', function () {
    AV.User.logOut();
    console.log('您成功退出了程序');
  });
