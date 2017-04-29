"use strict";

angular
    .module("blocJams")
    .controller("PlaylistingCtrl", ["RequestDataService", "CommitDataService", "SongPlayer", "$state", "$stateParams",
        function PlaylistingCtrl(RequestDataService, CommitDataService, SongPlayer, $state, $stateParams)
        {
            var self = this;

            SongPlayer.displayedAlbum = {};

            RequestDataService.getSongs().then(function(songs)
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
                CommitDataService.newPlaylisting($stateParams.id, song.id.toString())
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
