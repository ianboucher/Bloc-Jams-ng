(function()
{
    "use strict";

    angular
        .module("blocJams")
        .service("DataService", [
            "$http",

            function DataService($http)
            {
                var self = this;

                self.getCollection = function()
                {
                    return $http.get("/albums.json");
                };

                self.getAlbum = function(id)
                {
                    return $http.get("/albums/" + id + ".json");
                }

                self.getSongs = function()
                {
                    return $http.get("/songs.json");
                };

                self.getSong = function(id)
                {
                    return $http.get("/songs/" + id + ".json");
                }

                self.getPlaylists = function()
                {
                    return $http.get("/playlists.json");
                };

                self.getPlaylist = function(id)
                {
                    return $http.get("/playlists/" + id + ".json");
                }

                self.newPlaylist = function(name, description)
                {
                    return $http.post("/playlists", {
                        "name"        : name,
                        "description" : description
                    });
                }

                self.newPlaylisting = function(playlist, song)
                {
                    return $http.post("/playlistings", {
                        "playlist_id" : playlist,
                        "song_id"     : song
                    });
                }

                self.removePlaylisting = function(playlist, song)
                {
                    // ng seems to require this format of http request to work
                    // with Rails singular resource
                    return $http(
                    {
                        "method" : "DELETE",
                        "url"    : "/playlistings",
                        "params" : {"playlist_id" : playlist, "song_id" : song}
                    });
                }

                return self;
            }
        ])
})();
