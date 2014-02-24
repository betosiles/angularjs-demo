'use strict';

(function($LAB, bootstrap) {
    bootstrap();

    $LAB.runQueue()
    .script([
        'scripts/controllers/NavbarCtrl.js',
        'scripts/controllers/HomeCtrl.js',
        'scripts/controllers/AboutCtrl.js',
        'scripts/controllers/ContactCtrl.js'
    ]).wait(function() {
        angular.bootstrap(document, ['app']);
    });
})($LAB, bootstrap);
