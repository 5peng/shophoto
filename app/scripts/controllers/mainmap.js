'use strict';

/**
 * @ngdoc function
 * @name shophotoApp.controller:MainmapCtrl
 * @description
 * # MainmapCtrl
 * Controller of the shophotoApp
 */
angular.module('shophotoApp')
  .controller('MainmapCtrl', function ($scope) {

    angular.extend($scope, {
      center: {
        lat: 31.31851,
        lng: 120.71481,
        zoom: 18
      },
      tiles: {
        url: 'http://t{s}.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}',
        options: {
          maxZoom: 18,
          subdomains: [0,1,2,3]
        }
      },
      markers: {
      }
    });

    $scope.$watch('coords', function() {
      if ($scope.coords && $scope.coords.longitude && $scope.coords.latitude) {
        $scope.markers.upload = {
          lat: $scope.coords.latitude,
          lng: $scope.coords.longitude,
          focus: false,
          draggable: false
        };
        $scope.center.lat = $scope.coords.latitude;
        $scope.center.lng = $scope.coords.longitude;
      }
    });

  });
