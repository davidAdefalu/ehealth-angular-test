(function () {
    'use strict';
    angular.module('ehealth.controllers').controller('registerCtrl', Ctrl);
    Ctrl.$inject = ['$scope',  'pouchDbService', 'regData','randomIdService'];
    /* @ngInject */
    function Ctrl($scope, regService, registrationData, IdService) {
        var vm = $scope;

        vm.regData = registrationData.userData;

        vm.register = function () {
            var data = JSON.stringify(registrationData.userData);
            data._Id = IdService.generateId(1,10000);
            console.log("Here "+ data);
            var result = regService.addRecord(data);
            console.log(result +" in controller");
            
        };

        return vm;
    }
})();