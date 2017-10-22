/**
 * Test case for topNav controller
 */

describe("topNav controller test:", function() {
    var topNavCtrl;

    beforeEach(module('birthdayApp'));
    beforeEach(inject(function ($controller) {
        topNavCtrl = $controller('topNavCtrl', {
            // Overwrite $location here
            $location: {
                path: function () {return '/'}
            }
        });
    }));

    it('topNav controller should exist', function() {
        expect(topNavCtrl).toBeDefined();
    });

    it('should determine if the current local match the page', function() {
        expect(topNavCtrl.navClass('birthdayInput')).toBe(false);
        expect(topNavCtrl.navClass('')).toBe(true);
    })
});

