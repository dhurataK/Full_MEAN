angular.module("app")
  .factory("userFactory", ["$http", function($http){
    var factory = {};

    factory.users = [
      { firstname: "Jason", lastname: "Franz", birthday: "05/16/1994"}
    ]

    factory.getUsers = function(callback){
      $http.get("/users")
        .then(function(response){
          // console.log(response);
          factory.users = response.data;
          callback(factory.users);
        })
        .catch(function(err){
          throw err;
        })
    }

    factory.createUser = function(user, callback){
      $http.post("/users", user)
        .then(function(response){
          console.log(response);
          factory.users.push(response.data);
          callback();
        })
        .catch(function(err){
          throw err;
        })
    }

    return factory;
  }])
