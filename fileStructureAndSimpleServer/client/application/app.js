angular.module('app', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/',{
          templateUrl:'../index.html'
        })
        .otherwise('/')
  }])
