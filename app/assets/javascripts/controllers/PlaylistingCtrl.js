"use strict";

angular
    .module("blocJams")
    .controller("PlaylistingCtrl", ["DataService", "SongPlayer", "$state", "$stateParams",
        function PlaylistingCtrl(DataService, SongPlayer, $state, $stateParams)
        {
            var self = this;

            SongPlayer.displayedAlbum = {};

            DataService.getSongs().then(function(songs)
            {
                self.songs = songs.data;
            })
            .catch(function(error)
            {
                // TODO: Handle error properly
                console.log(error);
            })

            self.add = function(song)
            {
                DataService.newPlaylisting($stateParams.id, song.id.toString())
                    .then(function(playlisting)
                    {
                        console.log(playlisting);
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
