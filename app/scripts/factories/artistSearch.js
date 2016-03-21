'use strict';

angular.module('listenListApp')
.factory('ArtistSearch', ['$http', function($http) {

  var retrieveArtistSearch = function(artistName) {
    var config = {
      params: {
        q: artistName,
        type: 'artist'
      }
    };

    return $http.get('https://api.spotify.com/v1/search', config)
      .then(function successCallback(response) {
        return response.data.artists.items.map(function(item) {
          return item.name;
        });
      }, function errorCallback(response) {
        // TODO handle error case
      });
  };

  return function(artistname) {
    return retrieveArtistSearch(artistname);
  };
}]);

