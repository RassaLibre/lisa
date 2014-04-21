"use strict"

###
Directives
###
angular.module("myApp.directives")
    .directive "authordir",

        ["author", (author) ->
            
            (scope, elm, attr) ->
                elm.text "Author: " + author
        ]