(function () {
    'use strict';
    angular.module('ehealth.controllers').controller('authCtrl', Ctrl);
    Ctrl.$inject = ['$q', '$state', '$scope'];
    /* @ngInject */
    function Ctrl($q, $state, $scope) {
        var vm = $scope;

        vm.loginData = {
            username: "",
            password: ""
        };

        vm.login = function () {
            $state.go('app.register');
        };

        return vm;
    }
})();