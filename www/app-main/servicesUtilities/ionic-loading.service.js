(function () {
    'use strict';
    angular.module('ehealth.services').factory('modalDialogService', loading);
    loading.$inject = ['$q', '$ionicLoading'];
    /* @ngInject */
    function loading($q, $ionicLoading) {
        var loading;
        return {
            show: function (a) {
                var msg = (a) ? a : 'Loading...';
                $ionicLoading.show({
                    template: '<h1><i class="icon ion-ios7-reloading"></i></h1><br>' + msg,
                    //templateUrl: 'loading.template.html'
                    noBackdrop: false,
                    duration: 90000,
                    delay: 0
                });
            },
            hide: function () {
                $ionicLoading.hide();
            }
        };
    }
})();