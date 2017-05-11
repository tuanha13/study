(function (angular) {
    'use strict';

    angular.module('app.controllers').controller('RouteIndexController', RouteIndexController);

    RouteIndexController.$inject = ['AppServices', 'AppModels'];
    function RouteIndexController(AppServices, AppModels) {
        var that = this;
        that.model = {};
        that.routeIdSelected = that.routePointIdSelected = that.routeScheduleIdSelected = null;

        AppModels.route().getRoutes().then(function (data) {
            that.model.routes = data;
        });

        // select events

        that.onSelectRoute = function (id, e) {
            if (e.target.nodeName.toLowerCase() == 'i') {
                return false;
            }

            that.routeIdSelected = id;
            that.routePointIdSelected = that.routeScheduleIdSelected = null;

            AppModels.route().getRoutePoints(id).then(function (data) {
                that.model.routePoints = data;
            });

            AppModels.route().getRouteSchedules(id).then(function (data) {
                that.model.routeSchedules = data;
            });
        };

        that.onSelectRoutePoint = function (id, e) {
            if (e.target.nodeName.toLowerCase() == 'i') {
                return false;
            }

            that.routePointIdSelected = id;
            that.routeScheduleIdSelected = null;
        };

        that.onSelectRouteSchedule = function (id, e) {
            if (e.target.nodeName.toLowerCase() == 'i') {
                return false;
            }

            that.routeScheduleIdSelected = id;
        };

        // route

        that.showAddRouteModal = function () {
            var options = {};
            options.templateUrl = view('route/add_edit_route.html');
            options.controller = function ($scope, $uibModalInstance) {
                $scope.options = {};

                $scope.options.add = function () {
                    // do add
                    $uibModalInstance.close(true);
                };

                $scope.options.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };
            };

            AppServices.modal().open(options).then(function (result) {});
        };
        // edit route modal
        that.showEditRouteModal = function (id) {
            AppModels.route().getRoute(id).then(function (route) {
                var options = {};
                options.templateUrl = view('route/add_edit_route.html');
                options.controller = function ($scope, $uibModalInstance) {
                    $scope.options = {};
                    $scope.route = route;

                    $scope.options.add = function () {
                        // do add
                        $uibModalInstance.close(true);
                    };

                    $scope.options.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                };

                AppServices.modal().open(options).then(function (result) { });
            });
        };
        // delete route modal
        that.showDeleteRouteModal = function () {
            var options = {
                headerText: 'Delete route?',
                bodyText: 'Are you sure you want to delete selected route?'
            };

            AppServices.confirm().open(options).then(function () { });
        };

        // route points
        // add route point modal
        that.showAddRoutePointModal = function () {
            var options = {};
            options.templateUrl = view('route/add_edit_route_point.html');
            options.controller = function ($scope, $uibModalInstance) {
                $scope.options = {};

                $scope.options.add = function () {
                    // do add
                    $uibModalInstance.close(true);
                };

                $scope.options.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };
            };

            AppServices.modal().open(options).then(function (result) { });
        };
        // edit route point modal
        that.showEditRoutePointModal = function (id) {
            AppModels.route().getRoutePoint(id).then(function (routePoint) {
                var options = {};
                options.templateUrl = view('route/add_edit_route_point.html');
                options.controller = function ($scope, $uibModalInstance) {
                    $scope.options = {};
                    $scope.route = routePoint;

                    $scope.options.add = function () {
                        // do add
                        $uibModalInstance.close(true);
                    };

                    $scope.options.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                };

                AppServices.modal().open(options).then(function (result) { });
            });
        };
        // delete route point modal
        that.showDeleteRoutePointModal = function () {
            var options = {
                headerText: 'Delete route point?',
                bodyText: 'Are you sure you want to delete selected route?'
            };

            AppServices.confirm().open(options).then(function () { });
        };

        // route schedule
        // add route schedule modal
        that.showAddRouteScheduleModal = function () {
            var options = {};
            options.templateUrl = view('route/add_edit_route_schedule.html');
            options.controller = function ($scope, $uibModalInstance) {
                $scope.options = {};

                $scope.options.add = function () {
                    // do add
                    $uibModalInstance.close(true);
                };

                $scope.options.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };
            };

            AppServices.modal().open(options).then(function (result) { });
        };
        // edit route schedule modal
        that.showEditRouteScheduleModal = function (id) {
            AppModels.route().getRouteSchedule().then(function(routeSchedule){
                var options = {};
                options.templateUrl = view('route/add_edit_route_schedule.html');
                options.controller = function ($scope, $uibModalInstance) {
                    $scope.options = {};
                    $scope.route = routeSchedule;

                    $scope.options.add = function () {
                        // do add
                        $uibModalInstance.close(true);
                    };

                    $scope.options.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                };

                AppServices.modal().open(options).then(function (result) { });
            });
        };
        // delete route schedule modal
        that.showDeleteRouteScheduleModal = function () {
            var options = {
                headerText: 'Delete route schedule?',
                bodyText: 'Are you sure you want to delete selected route?'
            };

            AppServices.confirm().open(options).then(function () { });
        };
    }
})(window.angular);