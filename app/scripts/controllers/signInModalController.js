angular.module('listenListApp')
.controller('SignInModalCtrl', ['$scope', '$uibModalInstance', 'Auth', '$location', function($scope, $uibModalInstance, Auth, $location) {
  $scope.signInWithFacebook = function() {
    console.log('Clicked signInWithFaacebook');
    var auth = Auth;
    auth.$authWithOAuthPopup('facebook').then(function(authData) {
      console.log("Logged in as:", authData.uid);
      console.log("Display name:", authData.facebook.displayName);
      $location.path('/home');
      $uibModalInstance.dismiss('done');
    }).catch(function(error) {
      console.error("Authentication failed:", error);
    });
  };
  $scope.dismissModal = function() {
    console.log('Clicked dismiss modal');
    $uibModalInstance.dismiss('cancel');
  };
}]);
