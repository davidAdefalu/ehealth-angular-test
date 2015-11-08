(function () {
        'use strict';
        angular.module('ehealth.services').factory('pouchDbService', pouchDbService);
        pouchDbService.$inject = ['notificationService'];

        function pouchDbService(notification) {
            var vm = this;
        
             var _db  = new PouchDB('ehealthDb');  
            
            // Todo: add checker for existing id and create new Id if exists
            function addRecord(regData) 
            {
                console.log(regData + "inservice");
               _db.put(regData, function callback(bck, result) {
                if (bck) {
                    console.log('Successfully Saved Data!');
                    notification.success("Data Successfully Saved");
                    return true;
                }
                 else{
                     return false;

                 }
                    
              });

            }
            
            angular.extend(this, 
            {
                addRecord: addRecord,
                
            });
            
            return vm;
        }
    }
)();