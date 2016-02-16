'use strict';

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
        controllerAs: 'MainCtrl'
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'SignInCtrl',
        controllerAs: 'SignInCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
