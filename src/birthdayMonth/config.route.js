(function() {
    'use strict';

    angular
        .module('birthdayApp.birthdayMonth')
        .config(['$routeProvider', routeHelper]);

    function routeHelper($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'birthdayMonth/birthdayMonth.html',
                controller: 'birthdayMonthCtrl',
                controllerAs: 'bm'
            });
    }
})();