(function (angular) {
    'use strict';

    angular.module('app.controllers').controller('TrackIndexController', TrackIndexController);

    TrackIndexController.$inject = ['AppServices', 'AppModels'];
    function TrackIndexController(AppServices, AppModels) {
        var that = this;

        that.model = {};

        AppModels.track().getTracks().then(function (data) {
            that.model.tracks = data;

            setTimeout(function () {
                $('#data-table thead th').each(function (i) {
                    var w = $(this).outerWidth();
                    $('#filter-table thead td').each(function (j) {
                        if (i == j) {
                            $(this).css('width', w);
                        }
                    })
                });
            })
        });

    }
})(window.angular);