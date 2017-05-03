angular.module('app')
  .factory('usersFactory',['$http', function($http) {
    var factory = {};
    factory.users = [];
    factory.user = {};

    factory.getUsers() = function(callback) {
    $http.get('/users')
      .then(function(response) {
      // console.log(response.data);
      $factory.users =response.data;
      callback($factory.users)
      })
      .catch(function(err) {
        throw err;
      })
    }
    return factory
  }])
