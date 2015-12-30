'use strict';

/**
 * @ngdoc overview
 * @name listenListApp
 * @description
 * # listenListApp
 *
 * Main module of the application.
 */
angular
  .module('listenListApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
