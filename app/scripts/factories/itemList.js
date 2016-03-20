'use strict';

angular.module('listenListApp')
.factory('ItemList', ['$firebaseObject', '$firebaseArray', function($firebaseObject, $firebaseArray) {

  return function(uid) {
    var ref = new Firebase("https://tunezlist.firebaseio.com");
    var user = $firebaseObject(ref.child('users').child(uid));

    return $firebaseArray(user.$ref().child('items'));
  };
}]);

