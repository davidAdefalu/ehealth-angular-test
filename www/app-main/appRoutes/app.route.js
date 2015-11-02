(function () {
    'use strict';
    angular.module('ehealth.routes').config(Config);
    Config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    /* @ngInject */
    function Config($stateProvider, $urlRouterProvider, $locationProvider) {

        //var viewDir = appSettingSevice.viewDir;
        var viewDir = 'app-main/views/';

        $urlRouterProvider.otherwise('/auth/login');
        $locationProvider.hashPrefix('!');
        //$locationProvider.html5Mode(true);
        $stateProvider
            .state('app', {
                url: "^/app",
                abstract: true,
                templateUrl: viewDir + "app.menu.html",
                controller: 'menuCtrl',
            })
            .state('app.home', {
                url: "^/home",
                views: {
                    'menuContent': {
                        templateUrl: viewDir + "app.home.html",
                        controller: "menuCtrl",
                        controllerAs: "menu"
                    }
                },
                data: {
                    requireLogin: false,
                    roles: []
                }
            })
            .state('app.auth-login', {
                url: "^/auth/login",
                views: {
                    'menuContent': {
                        templateUrl: viewDir + "auth-login.html",
                        controller: 'authCtrl',
                        controllerAs: "auth",
                        data: {
                            requireLogin: false
                        }
                    }
                }
            })
            .state('app.register', {
                url: "^/auth/register",
                views: {
                    'menuContent': {
                        templateUrl: viewDir + "register.html",
                        controller: 'registerCtrl',
                        controllerAs: "register",
                        data: {
                            requireLogin: false
                        }
                    }
                }
            });
    }
})();