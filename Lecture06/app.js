(function () {
    'use strict';

    var app = angular.module('NameCalculator', []);

    app.controller('NameCalculatorController', function ($scope) {
        $scope.name = "";
        $scope.totalValue = 0;
        $scope.displayNumeric = function () {
            var totalNameValue = calculateTotalValueOfString($scope.name);
            $scope.totalValue = totalNameValue;
        };

        function calculateTotalValueOfString(string) {
            var totalStringValue = 0;
            for (var i = 0; i < string.length; i++) {
                totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
        }

    });

})();
