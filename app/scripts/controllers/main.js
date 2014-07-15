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
    $scope.getLocation = function() {
      navigator.geolocation.getCurrentPosition(function(pos) {
        $scope.$apply(function() {
          $scope.coords = pos.coords;
          console.log($scope.coords);
        });
      }, function(error) {
        $scope.$apply(function() {
          $scope.geoError = error;
          console.log(error);
        });
      });
    };

    // Submit form
    // Store file, user, address name & latlng
    $scope.submitPhotoForm = function() {

      var formFile = $('#file')[0];
      if (formFile.files.length > 0) {
        var uploadFile = formFile.files[0];
        var file = new AV.File(uploadFile.name, uploadFile);

        file.save({
          success: function() {

            // New photo object
            var Photo = AV.Object.extend('Photo');
            var photo = new Photo();
            var latlng = new AV.GeoPoint({latitude: $scope.coords.latitude, longitude: $scope.coords.longitude});
            photo.set('user', AV.User.current());
            photo.set('file', file);
            photo.set('latlng', latlng);

            photo.save(null, {
              success: function(result) {
                console.log(result);
              },
              error: function(result, error) {
                console.log([result, error]);
              }
            });
          },
          error: function(result, error) {
            console.log([result, error]);
          }
        });
      }
    };

    $scope.getLocation();
  });
