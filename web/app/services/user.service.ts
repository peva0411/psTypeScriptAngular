﻿module app.services {
    'use strict';

    export interface IUserService {
        getById(uniqueId: string): ng.IPromise<IUser>;
    }

    export interface IUser {
        uniqueId: string;
        email: string;
        firstName: string;
        lastName: string;
        password: string;
        roles: string[];
        timezoneOffset: number;
        twitterUserName?: string;
        createDate?: string;
        modifiedDate?: number;
        socialNetworks: ISocialNetwork[];
    }

    export interface ISocialNetwork {
        name: string;
        username: string;
    }

    class UserService implements IUserService {


        static $inject = ['$http'];

        constructor(private $http: ng.IHttpService) {
        }

        getById(uniqueId: string): ng.IPromise<IUser> {
            return this.$http.get('/api/users/' + uniqueId)
                .then((response: ng.IHttpPromiseCallbackArg<IUser>) :IUser => {
                    return response.data;
                });
        }
    }

    angular.module('app.services')
        .service('app.services.UserService', UserService);

}