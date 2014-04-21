(function() {
  "use strict";
  angular.module("myApp", ["ngRoute", "myApp.controllers", "myApp.directives", "myApp.filters", "myApp.services"]).config([
    "$routeProvider", function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MainCtrl'
      });
      $routeProvider.when('/installation', {
        templateUrl: 'partials/installation.html',
        controller: 'InstallationCtrl'
      });
      $routeProvider.when('/tasks', {
        templateUrl: 'partials/tasks.html',
        controller: 'TasksCtrl'
      });
      return $routeProvider.when('/sampleapp', {
        templateUrl: 'partials/sampleapp.html',
        controller: 'SampleAppCtrl'
      });
    }
  ]);

  angular.module("myApp.controllers", []);

  angular.module("myApp.services", []);

  angular.module("myApp.filters", []);

  angular.module("myApp.directives", []);

}).call(this);

(function() {


}).call(this);


/*
Error
 */

(function() {
  angular.module('myApp.controllers').controller('ErrorCtrl', ['$scope', function($scope) {}]);

}).call(this);


/*
Instalation page
 */

(function() {
  angular.module('myApp.controllers').controller('InstallationCtrl', ['$scope', function($scope) {}]);

}).call(this);


/*
Mainpage
 */

(function() {
  angular.module("myApp.controllers").controller("MainCtrl", [
    "$scope", "$location", function($scope) {

      /*
      function returns twitter name of the author of the stack
       */
      $scope.get_twitter_name = function() {
        return "popplagip";
      };

      /*
      function returns the name of the stack
       */
      return $scope.get_stack_name = function() {
        return "LISA";
      };
    }
  ]);

}).call(this);


/*
Sample application route
 */

(function() {
  angular.module('myApp.controllers').controller('SampleAppCtrl', [
    '$scope', function($scope) {
      $scope.make_uppercase = function() {
        return $scope.sampletext = $scope.sampletext.toUpperCase();
      };
      return $scope.make_lowercase = function() {
        return $scope.sampletext = $scope.sampletext.toLowerCase();
      };
    }
  ]);

}).call(this);


/*
Tasks
 */

(function() {
  angular.module('myApp.controllers').controller('TasksCtrl', ['$scope', function($scope) {}]);

}).call(this);

(function() {
  "use strict";

  /*
  The directive is attached to the main menu on the page and takes care of
  marking the right menu item when it is clicked
   */
  angular.module('myApp.directives').directive("menuitemselector", [
    "$location", function($location) {
      return {
        link: function(scope, elem, attr) {
          return scope.$on('$routeChangeStart', function(next, current) {
            var actual_path, button_path;
            actual_path = $location.$$path;
            button_path = elem[0].childNodes[0].getAttribute('ng-href');
            if ('#' + actual_path === button_path) {
              elem[0].classList.add('active');
            } else {
              elem[0].classList.remove('active');
            }
          });
        }
      };
    }
  ]);

}).call(this);

(function() {
  "use strict";

  /*
  Directives
   */
  angular.module("myApp.directives").directive("authordir", [
    "author", function(author) {
      return function(scope, elm, attr) {
        return elm.text("Author: " + author);
      };
    }
  ]);

}).call(this);

(function() {
  "use strict";

  /*
  filters
   */
  angular.module("myApp.filters", []).filter("twittername", [
    function() {
      return function(name) {
        return "@" + name;
      };
    }
  ]);

}).call(this);

(function() {
  "use strict";

  /*
  Services
   */
  angular.module("myApp.services", []).value("author", "Tomas Prochazka");

}).call(this);
