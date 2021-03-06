angular.module("app").directive('appDirective', function() {
  return {
    restriction: 'E,A',
    scope: {
      linkName: "=footerLinks"
    },
    templateUrl: '/views/footer.html',
    controller: function($scope) {
    }
  }
}).
  directive('headerDirective', function() {
    return {
      restriction: 'E,A',
      scope: {
        head: "=headers",
        move: "&"
      },
      templateUrl: '/views/header.html',
      controller: function($scope) {
        setTimeout(function() {
          $scope.move()
        }, 500)

      }
    }
});
