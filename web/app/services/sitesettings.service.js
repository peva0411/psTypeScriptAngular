﻿var app;
(function (app) {
    (function (services) {
        'use strict';

        var SiteSettingsService = (function () {
            function SiteSettingsService($http, apiEndpoint) {
                this.$http = $http;
                this.apiEndpoint = apiEndpoint;
            }
            return SiteSettingsService;
        })();

        factory.$inject = ['$http', 'app.blocks.ApiEndpoint'];
        function factory($http, apiEndpoint) {
            return new SiteSettingsService($http, apiEndpoint);
        }

        angular.module('app.services').factory('app.services.SiteSettingsService', factory);
    })(app.services || (app.services = {}));
    var services = app.services;
})(app || (app = {}));
//# sourceMappingURL=sitesettings.service.js.map
