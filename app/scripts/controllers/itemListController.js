'use strict';

/**
 * @ngdoc function
 * @name listenListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listenListApp
 */
angular.module('listenListApp')
  .controller('ItemListCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
