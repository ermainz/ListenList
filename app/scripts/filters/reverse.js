'use strict';

angular.module('listenListApp').filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
