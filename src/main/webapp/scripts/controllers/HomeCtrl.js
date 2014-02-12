'use strict';

app.controller('HomeCtrl', ['$scope', 'channel', 'dataStorage', 'dataService',
function($scope, channel, dataStorage, dataService) {

    function update() {
        $scope.versionInfo = {
            'AngularJS': angular.version.full,
            'jQuery': jQuery.fn.jquery,
            'Underscore': _.VERSION
        };
    }

    //--------------------------------------------------------------------------
    // bootstrap
    //--------------------------------------------------------------------------

    function init() {
    }

    function refresh() {
        update();
    }

    init();
    refresh();
}]);