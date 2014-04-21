describe('e2e tests', function(){
    beforeEach(function(){
        browser().navigateTo('/');
    });

    it('shoud automatically redirect to home view', function(){
        expect(browser().window().path()).toBe("/");
    });

});