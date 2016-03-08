'use strict';

angular
  .module('listenListApp')
  .run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
      // We can catch the error thrown when the $requireAuth promise is rejected
      // and redirect the user back to the home page
      if (error === 'AUTH_REQUIRED') {
        $location.path('/welcome');
      }
    });
  }]);

angular
  .module('listenListApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/home'
      })
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'MainCtrl',
        resolve: {
          'currentAuth': ['Auth', function(Auth) {
            return Auth.$requireAuth();
          }]
        }
      })
      .when('/welcome', {
        templateUrl: 'views/welcome.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
