/**
 * Created by A B C on 29-Nov-16.
 */
(function () {
    'use strict'
    var app = angular.module('LunchCheck', []);
    app.controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
        $scope.dishes = "";
        $scope.msg = "";
        $scope.checkItems = function () {
            var trimSingleAndDoubleQuotes = /["']/g,
                dishes = $scope.dishes ? $scope.dishes.replace(trimSingleAndDoubleQuotes, "") : $scope.dishes,
                msg = "",
                i,
                itemsCount = 0;
            if(dishes && dishes.length>0){
                dishes = dishes.split(',');
                for(i=0; i<dishes.length;i++){
                  if(dishes[i] && dishes[i].trim().length>0)
                      itemsCount++;
                }
                msg = itemsCount <=3 ? "Enjoy!" : "Too much!";
            }else {
                msg = "Please enter data first";
            }
            $scope.msg = msg;
            console.log($scope.dishes);
            console.log($scope.msg);
        }
    }

})();