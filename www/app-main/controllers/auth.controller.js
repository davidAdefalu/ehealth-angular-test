(function () {
    'use strict';
    angular.module('ehealth.controllers').controller('authCtrl', Ctrl);
    Ctrl.$inject = ['$state', '$scope', 'pouchDbService', 'notificationService','randomIdService'];
    /* @ngInject */
    function Ctrl($state, $scope, pouchDbService,notificationService, IdService) {
        var vm = $scope;
        
        
        vm.UserNameIsEmpty = false;
        vm.PasswordIsEmpty = false;

        vm.loginData = {
            _id: "",
            username: "",
            password: ""
        };
        
        
        vm.emptyUserName = function()
        {
             if( vm.loginData.username === "")
             {
                vm.UserNameIsEmpty = true;
             }
            
        };
        
        vm.emptyPassword = function(){
            if(vm.loginData.username === "")
            {
                vm.PasswordIsEmpty  = true;
            }
        };

        vm.login = function () {
            console.log(JSON.stringify(vm.loginData) + " at login");
            if(vm.PasswordIsEmpty  === false && vm.UserNameIsEmpty === false){
                vm.loginData._id = IdService.generateId(1,100000);
                            console.log(JSON.stringify(vm.loginData) + " at aft Id generated");

                pouchDbService.addRecord(vm.loginData);
                
                $state.go('app.register');
            }
            else{
                
                notificationService.error("Invalid UserName and Password");
            }
        };

        return vm;
    }
})();