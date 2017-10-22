/**
 * Test case for birthdayInput controller
 */

describe("birthdayInput controller test:", function() {
    var birthdayInputCtrl;

    beforeEach(module('birthdayApp'));
    beforeEach(inject(function ($controller) {
        birthdayInputCtrl = $controller('birthdayInputCtrl');
    }));

    it('birthdayInput controller should exist', function() {
        expect(birthdayInputCtrl).toBeDefined();
    });

    it('should init formValue', function() {
        expect(birthdayInputCtrl.formValue).toEqual({
            name: '',
            date: ''
        });
    });

    it('should reset form input when saveForm', function() {
        birthdayInputCtrl.formValue = {
            name: 'abc',
            date: '10-10-2000'
        };

        birthdayInputCtrl.saveForm();
        expect(birthdayInputCtrl.formValue).toEqual({
            name: '',
            date: ''
        });
    });
});

