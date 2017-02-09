"use strict";

angular
    .module("blocJams")
    .service("CommitDataService", ["$http",
        function CommitDataService($http)
        {
            this.newPlaylist = function(name)
            {
                return $http(
                {
                    "method" : "POST",
                    "url"    : "/playlists/create",
                    "data"   : { "name" : name }
                });
            }

            return this;
        }
    ]);
