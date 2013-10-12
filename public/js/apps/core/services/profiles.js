'use strict';
var missingio = angular.module('missing-io.services',[]);


missingio.service('profileService', function($http) {
    return {
        getRandom: function(count, callback){
            var url = "/api/v1/profiles/random/" + count;
            $http.get(url).success(function(data) {
                 callback(data);
            });
        }
    };
});