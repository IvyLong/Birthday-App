(function() {
    'use strict';

    angular
        .module('birthdayApp')
        .factory('shareDataService', shareDataService);

    function shareDataService() {
        var months = [
            {'name': 'January', 'value': 1},
            {'name': 'February', 'value': 2},
            {'name': 'March', 'value': 3},
            {'name': 'April', 'value': 4},
            {'name': 'May', 'value': 5},
            {'name': 'June', 'value': 6},
            {'name': 'July', 'value': 7},
            {'name': 'August', 'value': 8},
            {'name': 'September', 'value': 9},
            {'name': 'October', 'value': 10},
            {'name': 'November', 'value': 11},
            {'name': 'December', 'value': 12}
        ];
        var monthMap = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0,
            12: 0
        };

        return {
            getMonths: getMonths,
            setData: setData,
            getData: getData
        };

        function getMonths() {
            return months;
        }

        function setData(data) {
            var inputDate = data.date;
            var inputDateMonth = Number(inputDate.split('-')[1]);

            // Increment month count by one
            monthMap[inputDateMonth]++;
        }

        function getData(){
            return monthMap;
        }
    }
})();
