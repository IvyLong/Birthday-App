(function() {
    'use strict';

    angular
        .module('birthdayApp.birthdayInput')
        .controller('birthdayInputCtrl', BirthdayInput);

    BirthdayInput.$inject = ['shareDataService'];

    function BirthdayInput(shareDataService) {
        var bi = this;

        bi.formValue = {
            name: '',
            date: ''
        };

        bi.saveForm = saveForm;

        function saveForm() {
            shareDataService.setData(bi.formValue);
            bi.formValue = {
                name: '',
                date: ''
            };
        }
    }
})();
