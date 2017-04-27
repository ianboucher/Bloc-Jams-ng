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
                    "url"    : "/playlists",
                    "data"   : { "name" : name }
                });
            }

            return this;
        }
    ]);
