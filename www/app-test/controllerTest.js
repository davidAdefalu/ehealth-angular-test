
describe('Auth Controller Test', function() {
    'use strict';
    
  beforeEach(module('ehealth.controllers'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$scope.emptyUserName', function() {
    var $scope, pouchDbService, $state, notificationService,randomIdService,controller; 

    beforeEach(function() {
        $scope = {};
        pouchDbService = {};
        $state={}; 
        notificationService  = {}; 
        randomIdService = {};
        controller = $controller('authCtrl', { $state: $state, $scope: $scope, pouchDbService:pouchDbService,           notificationService:notificationService, randomIdService:randomIdService }); 
    });

    it('returns true if username is empty', function() {
      $scope.loginData = {
            _id: "",
            username: "",
            password: ""
        };
      $scope.emptyUserName();
      expect($scope.UserNameIsEmpty).toEqual(true);
    });

    it('return false if user name is not empty string', function() {
        
        $scope.loginData = {
            _id: "",
            username: "trial",
            password: ""
        };
      $scope.emptyUserName();
      expect($scope.UserNameIsEmpty).toEqual(false);
    });
      
  });
});