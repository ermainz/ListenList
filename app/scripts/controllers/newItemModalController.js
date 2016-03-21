angular.module('listenListApp')
.controller('NewItemModalCtrl', ['$scope', '$uibModalInstance', 'Auth', '$location', 'ItemList', 'ArtistSearch', 'AlbumSearch', function($scope, $uibModalInstance, Auth, $location, ItemList, ArtistSearch, AlbumSearch) {

  console.log('New Item modal opened');
  var authData = Auth.$getAuth();
  if (!authData) {
    // TODO show message to log in
  }

  $scope.newItem = { listened: false };

  var items = ItemList(authData.uid);

  $scope.albumSearches = function(albumName) {
    return AlbumSearch(albumName, $scope.newItem.artist);
  }

  $scope.artistSearches = function(artistName) {
    return ArtistSearch(artistName);
  }

  $scope.addNewItem = function() {
    // TODO show spinner or something?
    // TODO validate artist and album not blank
    items.$add($scope.newItem).then(function(ref) {
      $uibModalInstance.dismiss('complete');
    });
    //
  };

  $scope.dismissModal = function() {
    console.log('Clicked dismiss modal');
    $uibModalInstance.dismiss('cancel');
  };
}]);
