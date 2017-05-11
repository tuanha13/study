(function (angular) {
    'use strict';

    angular.module('app.models').service('AppModels', AppModel);

    AppModel.$inject = ['UserModel', 'TrackModel', 'RouteModel'];
    function AppModel(UserModel, TrackModel, RouteModel) {
        return {
            user: function () {
                return UserModel;
            },
            track: function () {
                return TrackModel;
            },
            route: function () {
                return RouteModel;
            }
        };
    }
})(window.angular);
