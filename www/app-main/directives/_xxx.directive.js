(function () {
    'use strict';
    angular.module('ehealth.directives').directive('UniqueUsername', UniqueUsername);
    UniqueUsername.$inject = ['$q', 'authSvc'];
    /* @ngInject */
    function UniqueUsername($q, authSvc) {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function (scope, elem, attrs, ngModelController) {
                ngModelController.$asyncValidators.UniqueUserName = function (value) {
                    return $q(function (resolve, reject) {
                        authSvc.checkUsername(value).then(function (result) {
                            resolve();
                        }, function (err) {
                            reject();
                        });
                    });
                };
            }
        };
    }
})();

