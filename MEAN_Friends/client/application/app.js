angular.module("app", ['ngRoute'])
  .config(["$routeProvider", function($routeProvider){
    $routeProvider
      .when("/", {
        templateUrl: "partials/_index.html",
        controller: "userController"
      })
      .when("/show/:id", {
        templateUrl: "partials/_show.html",
        controller: "userController"
      })
      .when("/edit/:id", {
        templateUrl: "partials/_edit.html",
        controller: "userController"
      })
      .when("/new", {
        templateUrl: "partials/_new.html",
        controller: "userController"
      })
      .when("/delete/:id", {
        controller: "userController"
      })
      .otherwise("/")
  }])
