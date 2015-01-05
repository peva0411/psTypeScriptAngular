 module app.sitesettings {
     'use strict';

     interface ISiteSettingsScope {
         title: string;
         despcription: string;
         themeNames: string[];
         themeName: string;
         save(): void;
     }

     class SiteSettingsController implements ISiteSettingsScope {
         title: string;
         despcription: string;
         themeNames: string[];
         themeName: string;

         save(): void {}

     }

     angular
         .module('app.sitesettings')
         .controller('app.sitesettings.SiteSettingsController',
             SiteSettingsController);

 }