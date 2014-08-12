'use strict';

/**
 * @ngdoc function
 * @name shophotoApp.controller:WallCtrl
 * @description
 * # WallCtrl
 * Controller of the shophotoApp
 */
angular.module('shophotoApp')
  .controller('WallCtrl', function ($scope, AvosConvert) {
    
    angular.extend($scope, {
      center: {
        lat: 31.31851,
        lng: 120.71481,
        zoom: 13
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

    function buildMarker(photo) {

      var marker = {
        lat: photo.latlng.latitude,
        lng: photo.latlng.longitude,
        focus: false,
        draggable: false,
        icon: {
          iconUrl: photo.file.url + '?imageView2/1/w/32/h/32/interlace/1',
          shadowUrl: '',
          iconSize: [32, 32],
          shadowSize: [0, 0]
        }
      };

      $scope.markers[photo.objectId] = marker;
    }

    function geo() {

      var geoPoint = new AV.GeoPoint({latitude: 31.26639015625664, longitude: 120.72730145020746});

      var Photo = AV.Object.extend('Photo');
      var query = new AV.Query(Photo);

      query.near('latlng', geoPoint);
      query.limit(20);
      query.find({
        success: function(results) {

          $scope.photos = AvosConvert.toScope(results);
          
          angular.forEach($scope.photos, function(value) {
            buildMarker(value);
          });

          $scope.$apply();
        }
      });
    }

    geo();

  });
