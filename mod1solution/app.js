(function () {
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.message = "";
  $scope.lunchList = "";

  $scope.updateMessage = function(){
    var listLength = calcListLength($scope.lunchList);

    if ($scope.lunchList == "") {
      $scope.message = "Please enter data first.";
    } else if (listLength > 0 && listLength <= 3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  };

  function calcListLength(string){
      return string.split(',').length;
    };
}
})();
