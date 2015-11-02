(function () {
    'use strict';
    angular.module('ehealth.routes').config(intConfig);
    intConfig.$inject = ['$httpProvider'];
    /* @ngInject */
    function intConfig($httpProvider) {
        $httpProvider.interceptors.push(function ($rootScope) {
            return {
                request: function (config) {
                    //$rootScope.$broadcast('loading:show')
                    return config;
                },
                response: function (response) {
                    //$rootScope.$broadcast('loading:hide')
                    return response;
                }
            };
        });
    }
})();

(function () {
    'use strict';
    angular.module('ehealth.run').run(intRun);
    intRun.$inject = ['$rootScope', '$ionicLoading', '$timeout'];
    /* @ngInject */
    function intRun($rootScope, $ionicLoading, $timeout) {
//      
    }
})();
