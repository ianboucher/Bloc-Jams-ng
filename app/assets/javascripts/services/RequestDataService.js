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

            this.getSongs = function()
            {
                return $http(
                {
                    "method" : "GET",
                    "url"    : "/songs.json"
                });
            };

            this.getSong = function(id)
            {
                return $http(
                {
                    "method" : "GET",
                    "url"    : "/songs/" + id + ".json",
                });
            }

            this.getPlaylists = function()
            {
                return $http(
                {
                    "method" : "GET",
                    "url"    : "/playlists.json"
                });
            };

            this.getPlaylist = function(id)
            {
                return $http(
                {
                    "method" : "GET",
                    "url"    : "/playlists/" + id + ".json",
                });
            }

            return this;
        }
    ]);
