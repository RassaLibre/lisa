
###
Sample application route
###
angular.module('myApp.controllers')
    .controller 'SampleAppCtrl',
        ['$scope', ($scope)->

            $scope.make_uppercase = ->
                $scope.sampletext = $scope.sampletext.toUpperCase()


            $scope.make_lowercase = ->
                $scope.sampletext = $scope.sampletext.toLowerCase()

        ]

