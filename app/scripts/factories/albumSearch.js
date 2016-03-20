'use strict';

angular.module('listenListApp')
.factory('AlbumSearch', ['$http', function($http) {

  var retrieveAlbumSearch = function(albumName, artistName) {
    var searchString = "album:" + albumName;
    if (artistName) {
      searchString += " artist:" + artistName;
    }
    var config = {
      params: {
        q: searchString,
        type: 'album'
      }
    };

    return $http.get('https://api.spotify.com/v1/search', config)
      .then(function successCallback(response) {
        return response.data.albums.items.map(function(item) {
          return item.name;
        });
      }, function errorCallback(response) {
        // TODO handle error case
      });
  };

  return function(albumName, artistname) {
    return retrieveAlbumSearch(albumName, artistname);
  };
}]);

