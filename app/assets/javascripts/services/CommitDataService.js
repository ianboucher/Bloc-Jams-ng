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

            this.newPlaylisting = function(playlist, song)
            {
                return $http(
                {
                    "method" : "POST",
                    "url"    : "/playlistings",
                    "params" : {"playlist_id" : playlist, "song_id" : song}
                });
            }

            this.removePlaylisting = function(playlist, song)
            {
                return $http(
                {
                    "method" : "DELETE",
                    "url"    : "/playlistings",
                    "params" : {"playlist_id" : playlist, "song_id" : song}
                });
            }

            return this;
        }
    ]);
