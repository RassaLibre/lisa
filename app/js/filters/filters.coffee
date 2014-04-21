"use strict"

###
filters
###
angular.module("myApp.filters", [])
    .filter "twittername",
        [->
            (name) ->
                "@" + name
        ]