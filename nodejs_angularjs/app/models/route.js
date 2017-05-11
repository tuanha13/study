(function (angular) {
    'use strict';

    angular.module('app.models').service('RouteModel', RouteModel);

    RouteModel.$inject = ['$q', 'AppServices'];
    function RouteModel($q, AppServices) {
        return {
            getRoutes: function (options) {
                var d = $q.defer();

                // dummy data
                var data = [];
                for (var i = 1; i <= 4; i++) {
                    data.push({
                        'id': i,
                        'description': 'Description',
                        'created': '1900-01-01 00:00:00',
                        'modified': '1900-01-01 00:00:00',
                        'name': 'route ' + i
                    });
                }
                d.resolve(data);

                return d.promise;
            },
            getRoute: function (id) {
                var d = $q.defer();

                // dummy data
                d.resolve({
                    'id': id,
                    'description': 'Description',
                    'created': '1900-01-01 00:00:00',
                    'modified': '1900-01-01 00:00:00',
                    'name': 'route ' + id
                });

                return d.promise;
            },
            getRoutePoints: function (routeId) {
                var d = $q.defer();

                // dummy data
                var data = [];
                var rand = Math.floor(Math.random() * (30 - 5 + 1)) + 5;
                for (var i = 1; i <= rand; i++) {
                    data.push({
                        'id': i,
                        'description': 'route point ' + routeId + i,
                        'created': '1900-01-01 00:00:00',
                        'modified': '1922-02-02 00:00:00',
                        'routeId': routeId,
                        'locationType': 1,
                        'locationId': 23,
                        'timeFromStart': 120,
                    });
                }
                d.resolve(data);

                return d.promise;
            },
            getRoutePoint: function (routePointId) {
                var d = $q.defer();

                // dummy data
                d.resolve({
                    'id': routePointId,
                    'description': 'Description',
                    'created': '1900-01-01 00:00:00',
                    'modified': '1922-02-02 00:00:00',
                    'routeId': 6,
                    'locationType': 1,
                    'locationId': 23,
                    'timeFromStart': 120,
                });

                return d.promise;
            },
            getRouteSchedules: function (routeId) {
                var d = $q.defer();

                // dummy data
                var data = [];
                var rand = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
                for (var i = 1; i <= rand; i++) {
                    data.push({
                        'id': i,
                        'description': 'Description',
                        'created': '1900-01-01 00:00:00',
                        'modified': '1922-02-02 00:00:00',
                        'routeId': routeId,
                        'start': '11:00:00',
                        'end': '11:20:00'
                    });
                }
                d.resolve(data);

                return d.promise;
            },
            getRouteSchedule: function (routeScheduleId) {
                var d = $q.defer();

                // dummy data
                d.resolve({
                    'id': routeScheduleId,
                    'description': 'Description',
                    'created': '1900-01-01 00:00:00',
                    'modified': '1922-02-02 00:00:00',
                    'routeId': 6,
                    'start': '11:00:00.0000',
                    'end': '11:20:00.0000'
                });

                return d.promise;
            }
        }
    }

})(window.angular);