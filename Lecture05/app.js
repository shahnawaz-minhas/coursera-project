/**
 * Created by A B C on 29-Nov-16.
 */
(function () {
    'use strict';
    var app = angular.module('myFirstApp', []);
    app.controller('myFirstController', function ($scope) {
        $scope.name = "Shah Nawaz";
        $scope.sayHello = function () {
          return "Welcome to Coursera!";
        };
    });
})();