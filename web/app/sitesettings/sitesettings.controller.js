var app;
(function (app) {
    (function (sitesettings) {
        'use strict';

        var SiteSettingsController = (function () {
            function SiteSettingsController() {
            }
            SiteSettingsController.prototype.save = function () {
            };
            return SiteSettingsController;
        })();

        angular.module('app.sitesettings').controller('app.sitesettings.SiteSettingsController', SiteSettingsController);
    })(app.sitesettings || (app.sitesettings = {}));
    var sitesettings = app.sitesettings;
})(app || (app = {}));
//# sourceMappingURL=sitesettings.controller.js.map
