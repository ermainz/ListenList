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

    var resetNewItem = function() {
      $scope.newItem = {user: currentAuth.uid, listened: false};
    };

    var ref = new Firebase("https://tunezlist.firebaseio.com");
    var user = $firebaseObject(ref.child('users').child(currentAuth.uid));
    user.$bindTo($scope, 'user').then(function() {
      if (currentAuth.provider === 'facebook') {
        $scope.user.displayName = currentAuth.facebook.displayName;
      }
    });

    $scope.fireItems = $firebaseArray(user.$ref().child('items'));

    resetNewItem();

    $scope.listenedItems = function() {
      return $scope.fireItems.filter(function(item) {
        return item.listened;
      });
    };

    $scope.items = function() {
      return $scope.fireItems.filter(function(item) {
        return !item.listened;
      });
    };

    $scope.addNewItem = function() {
      $scope.fireItems.$add($scope.newItem).then(function(ref) {
        // nothing to do right now
      });
      resetNewItem();
    };

    $scope.markItemListened = function(itemKey) {
      var item = $scope.fireItems.$getRecord(itemKey);
      item.listened = true;
      $scope.fireItems.$save(item);
    };
  }]);
