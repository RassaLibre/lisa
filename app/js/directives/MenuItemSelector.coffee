"use strict"

###
The directive is attached to the main menu on the page and takes care of
marking the right menu item when it is clicked
###
angular.module('myApp.directives')
    .directive "menuitemselector",
        ["$location", ($location) ->
            link: (scope, elem, attr) ->
                scope.$on '$routeChangeStart', (next, current) ->
                    #current URL param
                    actual_path = $location.$$path
                    #path of the button to which the directive is attached
                    button_path = elem[0].childNodes[0].getAttribute('ng-href')
                    #if they are equal set the active class and if not remove it
                    if '#'+actual_path is button_path
                        elem[0].classList.add 'active'
                    else
                        elem[0].classList.remove 'active'
                    return
        ]
