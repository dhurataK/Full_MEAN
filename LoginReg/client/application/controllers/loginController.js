angular.module('app')
  .controller('loginController', ['$scope','$http','$cookies','$location', function($scope, $http, $cookies, $location) {
    $scope.users = []

    $scope.login = function() {
      $http.post('/auth/login', $scope.userLogin )
        .then(function(response) {
          $location.path('/success')
        })
        .catch(function( err) {
          throw err;
        })
    }

    $scope.register = function() {
      $http.post('/auth/register', $scope.registration )
        .then(function(response) {
          $location.path('/success')
        })
        .catch(function( err) {
          throw err;
        })
    }
    $scope.logout = function() {
      $http.delete('/auth/logout')
        .then(function() {
          $location.path('/')
        })
        .catch(function(err) {
          throw err;
        })
    }

    $scope.getUsers = function() {
      console.log("GEt users te loginController");
      $http.get('/users')
        .then(function(response) {
        // console.log(response.data);
        $scope.users =response.data;
        const thisUserId = $cookies.get('userID');
        for (var i = 0; i < $scope.users.length; i++) {
          if($scope.users[i]._id == thisUserId){
            $scope.thisUser = $scope.users[i];
            $scope.users.splice(i,1);
            break;
          }
        }
        // console.log($scope.thisUser);
        })
        .catch(function(err) {
          console.log("Errori te Login");
          throw err;
        })
    }
  }])
