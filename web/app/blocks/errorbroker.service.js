var app;
(function (app) {
    (function (blocks) {
        var ErrorBroker = (function () {
            function ErrorBroker() {
            }
            ErrorBroker.prototype.log = function (error) {
            };
            return ErrorBroker;
        })();

        angular.module('app.blocks').service('app.blocks.ErrorBroker', ErrorBroker);
    })(app.blocks || (app.blocks = {}));
    var blocks = app.blocks;
})(app || (app = {}));
//# sourceMappingURL=errorbroker.service.js.map
