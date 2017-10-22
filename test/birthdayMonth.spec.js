/**
 * Test case for birthdayMonth controller
 */

describe("birthdayMonth controller test:", function() {
    var birthdayMonthCtrl;

    beforeEach(module('birthdayApp'));
    beforeEach(inject(function ($controller) {
        birthdayMonthCtrl = $controller('birthdayMonthCtrl');
    }));

    it('birthdayMonth controller should exist', function() {
        expect(birthdayMonthCtrl).toBeDefined();
    });

    it('should generate months with proper data', function() {
        expect(birthdayMonthCtrl.months).toEqual([
            {'name': 'January', 'value': 1, count: 0},
            {'name': 'February', 'value': 2, count: 0},
            {'name': 'March', 'value': 3, count: 0},
            {'name': 'April', 'value': 4, count: 0},
            {'name': 'May', 'value': 5, count: 0},
            {'name': 'June', 'value': 6, count: 0},
            {'name': 'July', 'value': 7, count: 0},
            {'name': 'August', 'value': 8, count: 0},
            {'name': 'September', 'value': 9, count: 0},
            {'name': 'October', 'value': 10, count: 0},
            {'name': 'November', 'value': 11, count: 0},
            {'name': 'December', 'value': 12, count: 0}
        ]);
    });

    it('should sort Chronological when sortByChronological', function() {
        birthdayMonthCtrl.sortByChronological();

        expect(birthdayMonthCtrl.content).toBe('value');
        expect(birthdayMonthCtrl.isReverse).toBe(true);
    });

    it('should sort Numerical when sortByNumerical', function() {
        birthdayMonthCtrl.sortByNumerical();

        expect(birthdayMonthCtrl.content).toBe('count');
        expect(birthdayMonthCtrl.isReverse).toBe(true);
    });
});

