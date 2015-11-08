(function () {
        'use strict';
        angular.module('ehealth.services').factory('randomIdService', randomIdService);

        function randomIdService() {
            var vm = this;

            function generateId(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;

            }
            
            angular.extend(this, 
            {
                generateId: generateId

            });
            
            return vm;
        }
    }
)();