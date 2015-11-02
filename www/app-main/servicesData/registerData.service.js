(function () {
    'use strict';
    angular.module('ehealth.services').factory('regData', regData);
    
    function getRandomId(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


    function regData() {
        var vm = this;
        var id = getRandomId(1, 100000);
        vm.userData = {
            fname: "",
            lname: "",
            address:"",
            _id: id
        };
        
        

        return vm;
    }
})();