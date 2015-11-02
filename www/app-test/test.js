describe('pouchDbService', function() {
     'use strict';
var  samplePouchDbServiceObj;
var JsonArray ={_id:"2222",fname:"David",lname:"adefalu"};

    beforeEach(function(){
    module(function($provide){
        
        $provide.service('pouchDbService', function(){
        

            this.addRecord = jasmine.createSpy('addRecord').andCallFake(function(JsonArray) {
                return true;
            });

            this.wrongRecord = jasmine.createSpy('addRecord').andCallFake(function(){
            });


        });
  });
        
        module('ehealth.services');
});
    
    beforeEach(inject(function(pouchDbService){
  
        samplePouchDbServiceObj=pouchDbService;
}));
    
  it('return true if JSON object with _id field supplied', function(){

  expect(samplePouchDbServiceObj.addRecord).toEqual(true);
  expect(samplePouchDbServiceObj.wrongRecord).toEqual(false);
});


});
