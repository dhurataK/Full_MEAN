angular.module('app', ['ngRoute','ngCookies','ngMessages'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl:'partials/_index.html',
        controller:'loginController'
      })
      .when('/success',{
        templateUrl:'partials/_wall.html',
        controller:'loginController'
      })
      .otherwise('/')
  }])
