"use strict"
angular.module("myApp", [
    "ngRoute",
    "myApp.controllers",
    "myApp.directives",
    "myApp.filters",
    "myApp.services"
    ]).config ["$routeProvider",
    ($routeProvider) ->
      #location
      #$locationProvider.html5Mode(true)
      
      #routes
      $routeProvider.when '/',
        templateUrl: 'partials/home.html'
        controller: 'MainCtrl'

      $routeProvider.when '/installation',
        templateUrl: 'partials/installation.html'
        controller: 'InstallationCtrl'

      $routeProvider.when '/tasks',
        templateUrl: 'partials/tasks.html'
        controller: 'TasksCtrl'

      $routeProvider.when '/sampleapp',
        templateUrl: 'partials/sampleapp.html'
        controller: 'SampleAppCtrl'
        
]

angular.module("myApp.controllers", [])
angular.module("myApp.services", [])
angular.module("myApp.filters", [])
angular.module("myApp.directives", [])