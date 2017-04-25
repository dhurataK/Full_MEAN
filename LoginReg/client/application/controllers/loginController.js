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
  }])
