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
        templateUrl: 'views/itemList.html',
        controller: 'ItemListCtrl',
        controllerAs: 'ItemListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
