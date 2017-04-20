angular.module("app")
  .controller("userController", ["$scope", "$location","userFactory", function($scope, $location, userFactory){
    $scope.users = [];

    $scope.getUsers = function(){
      userFactory.getUsers(function(users){
        $scope.users = users;
      })
    }

    $scope.createUser = function(user){
      userFactory.createUser(user, function(){
        $location.path("/");
      });
    }
  }])
