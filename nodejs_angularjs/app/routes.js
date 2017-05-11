(function (angular, win) {
    'use strict';

    function route(route, options) {
        options.controllerAs = '$ctrl';
        if (_.has(options, 'templateUrl')) {
            options.templateUrl = view(options.templateUrl);
        }

        win.routes[route] = options;
    }

    win.routes = {};

    // home index
    route('/', {
        templateUrl: 'admin/index.html',
        controller: 'AdminIndexController'
    });

    route('/login', {
        templateUrl: 'admin/login.html',
        controller: 'AdminLoginController'
    });

    route('/user', {
        templateUrl: 'user/index.html',
        controller: 'UserIndexController'
    });

    route('/track', {
        templateUrl: 'track/index.html',
        controller: 'TrackIndexController'
    });

    route('/route', {
        templateUrl: 'route/index.html',
        controller: 'RouteIndexController'
    });

})(window.angular, window);
