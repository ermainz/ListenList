'use strict';

/**
 * @ngdoc function
 * @name listenListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listenListApp
 */
angular.module('listenListApp')
  .controller('MainCtrl', ['$scope', 'currentAuth', 'ItemList', function ($scope, currentAuth, ItemList) {

    // TODO on auth change, clear the list
    $scope.allItems = ItemList(currentAuth.uid);

    $scope.listenedItems = function() {
      return $scope.allItems.filter(function(item) {
        return item.listened;
      });
    };

    $scope.items = function() {
      return $scope.allItems.filter(function(item) {
        return !item.listened;
      });
    };

    $scope.markItemListened = function(itemKey) {
      var item = $scope.allItems.$getRecord(itemKey);
      item.listened = true;
      $scope.allItems.$save(item);
    };

    $scope.markItemUnListened = function(itemKey) {
      var item = $scope.allItems.$getRecord(itemKey);
      item.listened = false;
      $scope.allItems.$save(item);
    };
  }]);
