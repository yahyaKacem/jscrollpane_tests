'use strict';
//####################################################
var myApp = angular.module('jscrollpaneTestsApp', []);
myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
//####################################################
//######injecting the dependencies####################
controllers.MainCtrl.$inject = ['$scope'];
//####################################################
//######assigning the controllers to the application##
myApp.directive(directives);
myApp.controller(controllers);
//####################################################
