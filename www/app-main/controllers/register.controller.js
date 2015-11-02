(function () {
    'use strict';
    angular.module('ehealth.controllers').controller('registerCtrl', Ctrl);
    Ctrl.$inject = ['$q', '$scope', '$state',  'pouchDbService', 'regData', 'notificationService'];
    /* @ngInject */
    function Ctrl($q,  $scope, $state,  regService, registrationData,notification) {
        var vm = $scope;

        vm.regData = registrationData.userData;

        vm.register = function () {
            var data = JSON.stringify(registrationData.userData);
            console.log("Here "+ data);
           var result = regService.addRecord(data);
            
            console.log(result +" in controller");
            
        };

        return vm;
    }
})();