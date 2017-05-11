(function (angular, win) {
    'use strict';

    win.url = function (path) {
        return '#!/' + path;
    };

    win.view = function (n) {
        return '/app/views/' + n;
    };

    win.onCommonError = function (response) {

    };

    win.onCommonSuccess = function (response) {

    };
})(window.angular, window);
