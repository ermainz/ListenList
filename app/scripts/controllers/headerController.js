'use strict';

angular.module('listenListApp')
.controller('HeaderCtrl',
            ['$scope', '$uibModal', 'Auth', '$location',
              function($scope, $uibModal, Auth, $location) {

  var auth = Auth;
  auth.$onAuth(function(authData) {
    $scope.authData = authData;
  });

  $scope.signout = function() {
    auth.$unauth();
    $location.path('/welcome');
  };

  $scope.signin = function() {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/signInModal.html',
      controller: 'SignInModalCtrl',
      size: 'md',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function () {
      console.log('Modal closed at: ' + new Date());
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  };
}]);

// TODO move this controller to its own file
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
