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
      $http.put("/edit/" + id, user)
        .then(function(response){
          console.log(response.data)
          callback(response.data);
        })
        .catch(function(err){
          throw err;
        })
    }

    factory.getOneUser = function(id, callback){
      var user = factory.users.find(function(user) {
        return user._id === id;
      });

      if (user) {
        return callback(user);
      }

      $http.get("/show/" + id)
        .then(function(response){
          factory.users.push(response.data);
          callback(response.data);
        })
        .catch(function(err){
          throw err;
        })
    }

    factory.deleteUser = function(id, callback){
        console.log(id);
        $http.delete("/delete/" + id)
          .then(function(response){
            console.log("Inside then");
            for(var i = 0; i<factory.users.length;i++){
              if(id == factory.users[i]._id){
                factory.users.splice(i,1);
                break;
              }
            }
            callback(response.data);
          })
          .catch(function(err){
            throw err;
          })
    }

    return factory;
  }])
