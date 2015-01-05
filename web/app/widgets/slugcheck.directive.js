(function () {
    'use strict';

    angular.module('app.widgets').directive('blSlugCheck', slugCheck);

    function slugCheck() {
        var directive = {
            restrict: 'A'
        };
        return directive;
    }
})();
//# sourceMappingURL=slugcheck.directive.js.map
