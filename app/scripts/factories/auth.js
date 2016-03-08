'use strict';

angular.module('listenListApp')
.factory('Auth', ['$firebaseAuth', function($firebaseAuth) {
  var ref = new Firebase("https://tunezlist.firebaseio.com");
  return $firebaseAuth(ref);
}]);
