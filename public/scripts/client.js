var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when ('/home', {
          templateUrl: '/views/home-view.html',
          controller: 'HomeController',
          controllerAs: 'home'
        })
        .when ('/emp1', {
            templateUrl: '/views/view_1.html',
            controller: 'OneController',
            controllerAs: 'one'
        })
        .when ('/emp2', {
            templateUrl: '/views/view_2.html',
            controller: 'TwoController',
            controllerAs: 'two'
        })
        .otherwise ( {
            redirectTo: '/home'
        });
}]);
