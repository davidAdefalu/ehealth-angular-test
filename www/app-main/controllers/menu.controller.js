(function () {
    'use strict';
    angular.module('ehealth.controllers').controller('menuCtrl', menuCtrl);
    menuCtrl.$inject = ['$q', '$state', 'menuService',  'appSettingSevice'];
    /* @ngInject */
    function menuCtrl($q, $state, menuService, appSettingSevice) {
        var menuData = menuService.menu();
        var viewDir = appSettingSevice.viewDir;

        function gotoUrl(urlState) {
            $state.go(urlState);
        }

        

        function login() {
            $state.go('app.auth-login');
        }

        

        angular.extend(this, {
            menuData: menuData,
            gotoUrl: gotoUrl,
            login: login
        });
    }
})();