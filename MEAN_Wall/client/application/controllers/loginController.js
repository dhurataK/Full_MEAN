angular.module('app')
  .controller('loginController', ['$scope','$http','$cookies','$location', function($scope, $http, $cookies, $location) {
    $scope.users = []
    $scope.messages =[];
    $scope.comments = [];
    $scope.thisUser = {};

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
        })
        .catch(function(err) {
          console.log("Errori te Login");
          throw err;
        })
    }
    $scope.getMessages = function() {
      $http.get('/messages')
        .then(function(response) {
          $scope.messages = response.data;
        })
        .catch(function(err) {
          throw err;
        })
    }
    $scope.getComments = function() {
      $http.get('/comments')
        .then(function(response) {
          $scope.comments = response.data;
          // console.log("Komentet: te loginController ",response.data);
        })
        .catch(function(error) {
          throw error;
        })
    }
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
    $scope.postMessage = function() {
  // console.log("This user", $scope.message);
    const postMessage = {
      message:$scope.message.post,
      _user: $scope.thisUser
    };
    // console.log("This user", $scope.thisUser);
    $http.post('/messages', postMessage)
      .then(function(response) {
        $scope.message.post = '';
        $location.path('/success')
      })
      .catch(function(err) {
        throw err;
      })
    }

    $scope.postComment = function(comment, message) {
      console.log("KOMENTI: ", comment);
      console.log("Mesazhi: ",message);
      const postComment = {
      comment: comment,
      _user:$scope.thisUser,
      _message: message
    }
    $http.post('/comments', postComment)
      .then(function(response) {
        $location.path('/success')
      })
      .catch(function(err) {
        throw err;
      })
    }
  }])
