(function() {
    'use strict';

    angular
        .module('birthdayApp.birthdayMonth')
        .controller('birthdayMonthCtrl', birthdayMonth);

    birthdayMonth.$inject = ['shareDataService'];

    function birthdayMonth(shareDataService) {

        var bm = this;

        // Default sort is Chronological asc
        bm.content = 'value';
        bm.isReverse = false;

        bm.sortByChronological = sortByChronological;
        bm.sortByNumerical = sortByNumerical;

        init();

        function init() {
            var months = shareDataService.getMonths();
            var monthMap = shareDataService.getData();

            // Map month count to month
            bm.months = months.map(function(month) {
                return angular.extend({}, month, {
                    count: monthMap[month.value]
                });
            });
        }

        function sortByChronological() {
            // Reset sort order to asc when switch to sort by value
            bm.content === 'value'?bm.isReverse = !bm.isReverse: bm.isReverse = false;
            bm.content = 'value';
        }

        function sortByNumerical () {
            // Reset sort order to desc when switch to sort by count
            bm.content === 'count'?bm.isReverse = !bm.isReverse: bm.isReverse = true;
            bm.content = 'count';
        }
    }
})();


