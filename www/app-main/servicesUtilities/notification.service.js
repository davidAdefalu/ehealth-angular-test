(function () {
    'use strict';
    angular.module('ehealth.services').factory('notificationService', notification);
    notification.$inject = ['$q', 'toastr'];
    /* @ngInject */
    function notification($q, toastr) {
        var notify = this;

        function toastrOptions() {
            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            };
        }

        toastrOptions();

        notify.success = function (text) {
            if (text === null || text === undefined) {
                toastr.success('SUCCESS');
            } else {
                toastr.success('SUCCESS:: ' + text);
            }
        };

        notify.info = function (text) {
            if (text === null || text === undefined) {
                toastr.info('Info:');
            } else {
                toastr.info("INFO:: " + text);
            }
        };

        notify.error = function (text) {
            if (text === null || text === undefined) {
                toastr.error("ERROR:");
            } else {
                toastr.error("ERROR:: " + text);
            }
        };

        return notify;
    }
})();
