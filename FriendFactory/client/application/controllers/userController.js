angular.module("app")
  .controller("userController", ["$scope", "$location",'$routeParams' , "userFactory",function($scope, $location, $routeParams, userFactory){
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

    $scope.getOneUser = function() {
      var id = $routeParams.id;
      userFactory.getOneUser(id, function(user){
        $scope.user = user;
      })
    }

    $scope.deleteUser = function(id){
      userFactory.deleteUser(id, function(){
        $location.path("/")
      })
    }

    $scope.updateUser = function(user){
      var id = $routeParams.id;
      userFactory.updateUser( id, user,function(){
        $location.path("/")
      })
    }
  }])
