"use strict";

angular
    .module("blocJams")
    .controller("PlaylistCtrl", ["DataService", "$stateParams", "SongPlayer",
        function PlaylistCtrl(DataService, $stateParams, SongPlayer)
        {
            var self = this;

            DataService.getPlaylist($stateParams.id)
                .then(function(playlistResponse)
                {
                    self.id    = playlistResponse.data.id;
                    self.name  = playlistResponse.data.name;
                    self.songs = SongPlayer.displayedAlbum = playlistResponse.data.songs;
                })
                .catch(function(error)
                {
                    console.log("error in Album service getAll()"); //------ To-do: handle error properly
                })
            );


            self.remove = function(song, index)
            {
                DataService.removePlaylisting($stateParams.id, song.id.toString())
                    .then(function(playlisting)
                    {
                        self.songs.splice(index, 1);
                    })
                    .catch(function(error){
                        console.log(error);
                    })
            };


            self.play = function(song, index)
            {
                SongPlayer.play(song, index);
                SongPlayer.currentAlbum = SongPlayer.displayedAlbum;
            };


            self.pause = function(song)
            {
                SongPlayer.pause(song);
            }

        }
    ]);
