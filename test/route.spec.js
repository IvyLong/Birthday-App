/*
 * Test case for route setting
 */

describe('Route test:', function () {
    var $route;

    beforeEach(module('birthdayApp'));
    beforeEach(inject(function (_$route_) {
        $route = _$route_;
    }));

    it('should map routes to controllers', function() {
        expect($route.routes['/birthdayInput'].controller).toBe('birthdayInputCtrl');
        expect($route.routes['/birthdayInput'].templateUrl).toEqual('birthdayInput/birthdayInput.html');

        expect($route.routes['/'].controller).toEqual('birthdayMonthCtrl');
        expect($route.routes['/'].templateUrl).toEqual('birthdayMonth/birthdayMonth.html');
    });
});