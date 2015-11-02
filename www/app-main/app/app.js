(function () {
    'use strict';
    angular.module('ehealth', [
        'ionic',
        'toastr',
        'ngCordova',
        
        //'ui.bootstrap',
        //'ngAnimate',
        //'LocalStorageModule',
        //'angularGrid',

        ///////////////////////
        'ehealth.run',
        'ehealth.routes',
        'ehealth.services',
        'ehealth.directives',
        'ehealth.controllers'
        /////////////////////////
    ]);
    angular.module('ehealth.run', []);
    angular.module('ehealth.routes', []);
    angular.module('ehealth.services', []);
    angular.module('ehealth.directives', []);
    angular.module('ehealth.controllers', []);
})();