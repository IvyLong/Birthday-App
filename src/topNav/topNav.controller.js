(function() {
    'use strict';

    angular
        .module('birthdayApp.topNav')
        .controller('topNavCtrl', topNav);

    topNav.$inject = ['$location'];

    function topNav($location) {
        var tn = this;

        tn.navClass = navClass;

        function navClass(page) {
            var currentRoute = $location.path().substring(1);

            return currentRoute === page;
        }
    }
})();
