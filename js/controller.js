angular.module('app').controller('appCtrl', function($scope, appService) {

    $scope.comments = appService.showComments();

    $scope.footTag = '2016 Ryan Hadley';

    $scope.adding = function(text) {
      appService.addText(text);
      $scope.message = "";
      $('#comments').find('input').val('');
    }

    $scope.showAdd = true;
    //      function() {
    //   // if($(document).mousedown()) {
    //   // return false;
    //   // }
    //   return false;
    // };

    $scope.typewriter = function() {
      appService.typeout();
    }

    $scope.flashy = function() {
      appService.flashyfuck();
    }

    $scope.testy = function() {
      $.when( $scope.typewriter() ).done(function() {
         $scope.flashy();
       });
    }

});
