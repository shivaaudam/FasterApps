var app = angular.module('Fapps', ['ngStorage', 'ui.router', 'ui.bootstrap', 'ngCookies', 'controllerModule', 'serviceModule', 'constantsModule', 'factoriesModule']);
app.config(function($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      cache: false,
      templateUrl: 'views/signin.html',
      controller: 'loginCtrl'
    }).state('signup', {
      url: '/signup',
      cache: false,
      templateUrl: 'views/signup.html',
      controller: 'signupCtrl'
    }).state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'homeCtrl'
    }).state('home.dashboard', {
      url: '/dashboard',
      views: {
        'mainContent': {
          templateUrl: 'views/dashboard.html'
        }
      }
    }).state('home.departments', {
      url: '/departments',
      views: {
        'mainContent': {
          templateUrl: 'views/departments.html',
          controller: 'departmentCtrl'
        }
      }
    }).state('home.users', {
      url: '/users',
      views: {
        'mainContent': {
          templateUrl: 'views/users.html',
          controller: 'usersCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/login');
});
app.controller('myCtrl', ['$scope', function($scope) {

}]);
var controllerModule = angular.module('controllerModule', []);
var serviceModule = angular.module('serviceModule', []);
var constantsModule = angular.module('constantsModule', []);
var factoriesModule = angular.module('factoriesModule', []);
