"use strict";

angular
    .module("blocJams")
    .service("AlbumService", ["$http",
        function AlbumService($http)
        {
            this.getAll = function()
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

            // this.getAlbumSongs = function(id)
            // {
            //     return $http(
            //     {
            //         "method" : "GET",
            //         "url"    : "/songs?album_id=" + id + ".json"
            //     });
            // }

            return this;
        }
    ]);
