(function() {
    'use strict';

    angular
        .module('birthdayApp.birthdayInput')
        .config(['$routeProvider', routeHelper]);

        function routeHelper($routeProvider) {
            $routeProvider
                .when('/birthdayInput', {
                    templateUrl: 'birthdayInput/birthdayInput.html',
                    controller: 'birthdayInputCtrl',
                    controllerAs: 'bi'
            });
        }
})();