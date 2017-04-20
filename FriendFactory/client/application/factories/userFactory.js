angular.module("app")
  .factory("userFactory", ["$http", function($http){
    var factory = {};

    factory.users = [ ]

    factory.user = {};

    factory.getUsers = function(callback){
      $http.get("/users")
        .then(function(response){
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
          factory.users.push(response.data);
          callback();
        })
        .catch(function(err){
          throw err;
        })
    }

    factory.updateUser = function(id, user, callback){
      console.log(user);
      $http.post("/edit/" + id, user)
        .then(function(response){
          console.log(response.data)
          callback(response.data);
        })
        .catch(function(err){
          throw err;
        })
    }

    factory.getOneUser = function(id, callback){
      $http.get("/show/" + id)
        .then(function(response){
          factory.user = response.data;
          callback(response.data);
        })
        .catch(function(err){
          throw err;
        })
    }

    factory.deleteUser = function(id, callback){
        console.log(id);
        $http.get("delete/" + id)
          .then(function(response){
            callback(response.data);
          })
          .catch(function(err){
            throw err;
          })
    }

    return factory;
  }])
