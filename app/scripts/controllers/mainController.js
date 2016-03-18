'use strict';

/**
 * @ngdoc function
 * @name listenListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listenListApp
 */
angular.module('listenListApp')
  .controller('MainCtrl', ['$scope', 'currentAuth', '$firebaseObject', '$firebaseArray', function ($scope, currentAuth, $firebaseObject, $firebaseArray) {

    // TODO on auth change, clear the list

    var ref = new Firebase("https://tunezlist.firebaseio.com");
    var user = $firebaseObject(ref.child('users').child(currentAuth.uid));
    user.$bindTo($scope, 'user').then(function() {
      if (currentAuth.provider === 'facebook') {
        $scope.user.displayName = currentAuth.facebook.displayName;
      }
    });

    $scope.allItems = $firebaseArray(user.$ref().child('items'));

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
