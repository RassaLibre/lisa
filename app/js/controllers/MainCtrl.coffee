
###
Mainpage
###
angular.module("myApp.controllers")
    .controller "MainCtrl",
        ["$scope","$location", ($scope) ->

            ###
            function returns twitter name of the author of the stack
            ###
            $scope.get_twitter_name = ->
                "popplagip"

  
            ###
            function returns the name of the stack
            ###
            $scope.get_stack_name = ->
                "LISA"
        ]