angular.module('listenListApp')
.controller('NewItemModalCtrl', ['$scope', '$uibModalInstance', 'Auth', '$location', '$firebaseObject', '$firebaseArray', function($scope, $uibModalInstance, Auth, $location, $firebaseObject, $firebaseArray) {

  console.log('New Item modal opened');
  var authData = Auth.$getAuth();
  if (!authData) {
    // TODO show message to log in
  }
  $scope.newItem = { listened: false };

  var ref = new Firebase("https://tunezlist.firebaseio.com");
  var user = $firebaseObject(ref.child('users').child(authData.uid));
  var items = $firebaseArray(user.$ref().child('items'));

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
