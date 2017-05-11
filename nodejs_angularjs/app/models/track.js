(function (angular) {
    'use strict';

    angular.module('app.models').service('TrackModel', TrackModel);

    TrackModel.$inject = ['$q', 'AppServices'];
    function TrackModel($q, AppServices) {
        return {
            getTracks: function (options) {
                var d = $q.defer();

                // dummy data
                var data = [];
                for (var i = 1; i <= 18; i++) {
                    data.push({
                        'id': i,
                        'description': 'Description',
                        'created': '1900-01-01 00:00:00',
                        'modified': '1922-02-02 00:00:00',
                        'userId': 1,
                        'routeId': 6,
                        'routeScheduleId': 8,
                        'deviceId': 10,
                        'locationType': 1,
                        'locationId': 23,
                        'timestamp': 1234567891234
                    });
                }

                d.resolve(data);

                return d.promise;
            },
            getTrack: function (id) {
                var d = $q.defer();

                // dummy data
                d.resolve({
                    'id': id,
                    'description': 'Description',
                    'created': '1900-01-01 00:00:00',
                    'modified': '1900-01-01 00:00:00',
                    'userId': 1,
                    'routeId': 6,
                    'routeScheduleId': 8,
                    'deviceId': 10,
                    'locationType': 1,
                    'locationId': 23,
                    'timestamp': 1234567891234
                });

                return d.promise;
            }
        }
    }

})(window.angular);