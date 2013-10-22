'use strict';

/**
 * This is the main controller for the application.  There is only one right now,
 * given the simplistic nature of the application.  
 *
 */
var MainCtrl = app.controller('MainCtrl', function($scope) {
    $scope.activities = [
        {'name': 'Nexus S',
         'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
         'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
         'snippet': 'The Next, Next Generation tablet.'}
    ];
});
