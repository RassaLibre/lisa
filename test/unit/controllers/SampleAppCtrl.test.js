describe('controllers',function(){
	var ctrl, scope;

	beforeEach(module('myApp.controllers'));

	beforeEach(inject(function($rootScope, $controller){
		scope = $rootScope.$new();
		ctrl = $controller('SampleAppCtrl', {$scope: scope});
	}));

    it('should return input as uppercase', inject(function(){
        scope.sampletext = 'tomas';
        expect(scope.make_uppercase()).toBe('TOMAS');
    }));

    it('should return input as lowercase', inject(function(){
        scope.sampletext = 'TOMAS';
        expect(scope.make_lowercase()).toBe('tomas');
    }));

});