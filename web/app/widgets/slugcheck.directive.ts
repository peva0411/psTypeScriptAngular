((): void => {
    'use strict';

    angular
        .module('app.widgets')
        .directive('blSlugCheck', slugCheck);


    function slugCheck() : ng.IDirective {
        var directive = <ng.IDirective>{
            restrict: 'A'
        };
        return directive;
    }

})();
 