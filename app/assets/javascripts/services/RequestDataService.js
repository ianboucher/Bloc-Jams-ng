"use strict";

angular
    .module("blocJams")
    .service("RequestDataService", ["$http",
        function RequestDataService($http)
        {
            this.getCollection = function()
            {
                return $http(
                {
                    "method" : "GET",
                    "url"    : "/albums.json"
                });
            };

            this.getAlbum = function(id)
            {
                return $http(
                {
                    "method" : "GET",
                    "url"    : "/albums/" + id + ".json",
                });
            }

            return this;
        }
    ]);
