(function () {
    'use strict';
    angular.module('ehealth.services').factory('menuService', menuData);
    menuData.$inject = ['$q', '$http'];
    /* @ngInject */
    function menuData($q, $http) {
        var service = this;
        service.menu = {};

        service.register = {
            "title": "Register",
            "detail": [{
            "main_menu": {
                "iconClass": "fa fa-user dark",
                "menuText": "Register",
                "menuTextClass": "dark"
            },
            "sub_menu": [{
                    "urlState": "app.register",
                    "iconLeftClass": "fa fa-angle-right dark",
                    "iconRightClass": "",
                    "menuText": "Register",
                    "menuTextClass": "dark"
                }]
            }]
        };
        
        service.menu = function () {
            return service.register;
        };

        return service;
    }
})();