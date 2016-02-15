'use strict';

/**
 * @ngdoc function
 * @name listenListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listenListApp
 */
angular.module('listenListApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.newItem = {};

    var items = [
      { artist: "Red Hot Chili Peppers", album: "I'm With You", listened: false },
      { artist: "Red Hot Chili Peppers", album: "Stadium Arcadium", listened: false },
      { artist: "Red Hot Chili Peppers", album: "By The Way", listened: false },
      { artist: "Red Hot Chili Peppers", album: "Californication", listened: false },
      { artist: "Red Hot Chili Peppers", album: "One Hot Minute", listened: false },
      { artist: "Red Hot Chili Peppers", album: "Blood Sugar Sex Magik", listened: false },
      { artist: "Red Hot Chili Peppers", album: "Mother's Milk", listened: false },
      { artist: "Red Hot Chili Peppers", album: "Uplift Mofo Party Plan", listened: false },
      { artist: "Red Hot Chili Peppers", album: "Freaky Styley", listened: false },
      { artist: "Red Hot Chili Peppers", album: "Red Hot Chili Peppers", listened: false }
    ];

    $scope.listenedItems = function() {
      return items.filter(function(item) {
        return item.listened;
      });
    };

    $scope.items = function() {
      return items.filter(function(item) {
        return !item.listened;
      });
    };

    $scope.addNewItem = function() {
      items.unshift($scope.newItem);
      $scope.newItem = {};
    };

    $scope.markItemListened = function(item) {
      item.listened = true;
    };
  }]);
