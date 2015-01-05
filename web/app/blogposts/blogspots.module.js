// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the reference paths,
// then adjust the path value to be relative to this file
/// <reference path='/Scripts/typings/angularjs/angular.d.ts'/>
/// <reference path='/Scripts/typings/angularjs/angular-resource.d.ts'/>

// Create the module and define its dependencies.
var blogspots = angular.module('blogspots', [
    'ngResource',
    'ngAnimate',
    'ngRoute'
]);

// Execute bootstrapping code and any dependencies.
blogspots.run([
    '$q', '$rootScope', function ($q, $rootScope) {
    }]);
//# sourceMappingURL=blogspots.module.js.map
