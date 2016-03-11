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

  $scope.addNewItem = function() {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/newItemModal.html',
      controller: 'NewItemModalCtrl',
      size: 'sm',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function () {
      console.log('New item modal closed at: ' + new Date());
    }, function () {
      console.log('New item modal dismissed at: ' + new Date());
    });
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
