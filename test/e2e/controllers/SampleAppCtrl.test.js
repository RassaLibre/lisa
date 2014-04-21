describe('SampleApp', function(){

    beforeEach(function(){
        browser().navigateTo('/');
    });

    it(' Uppercase button should be by default disabled', function(){
        element('a[ng-href="#/sampleapp"]').click();
        expect(element('.to_uppercase_button').attr('disabled')).toBe('disabled');
    });

    it(' Lowercase button should be by default disabled', function(){
        element('a[ng-href="#/sampleapp"]').click();
        expect(element('.to_lowercase_button').attr('disabled')).toBe('disabled');
    });

    it('should make available uppercase and lowercase button when value is inserted', function(){
        element('a[ng-href="#/sampleapp"]').click();
        input('sampletext').enter('some text');
        expect(element('.to_uppercase_button').attr('disabled')).toBe(undefined);
        expect(element('.to_lowercase_button').attr('disabled')).toBe(undefined);           
    });    

});