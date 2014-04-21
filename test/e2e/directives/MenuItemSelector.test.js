describe('main menu', function(){

    beforeEach(function(){
        browser().navigateTo('/');
    });

    it('should mark the home button in the top menu', function(){
        expect(element('li.active>a').attr('ng-href')).toBe('#/');
    });

    it('should mark the instalation button when the page is redirected to the instalation page', function(){
        element('a[ng-href="#/installation"]').click();
        expect(element('li.active>a').attr('ng-href')).toBe('#/installation');
    });

});