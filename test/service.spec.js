/**
 * Test case for share data service
 */

describe("Share data service:", function() {
    var shareDataService;

    beforeEach(module('birthdayApp'));
    beforeEach(inject(function (_shareDataService_) {
        shareDataService = _shareDataService_;
    }));

    it('should have ShareDataService be defined', function () {
        expect(shareDataService).toBeDefined();
    });

    it('should increment count in monthMap when set a date', function() {
        var inputData = {
            name: 'Dave',
            date: '11-02-2017'
        };
        shareDataService.setData(inputData);
        expect(shareDataService.getData()[2]).toBe(1);

        shareDataService.setData(inputData);
        expect(shareDataService.getData()[2]).toBe(2);
    });

});

