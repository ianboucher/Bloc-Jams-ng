"use strict";

angular
    .module("blocJams")
    .controller("SongsCtrl", ["DataService", "SongPlayer",
        function SongsCtrl(DataService, SongPlayer)
        {
            var self = this;

            SongPlayer.displayedAlbum = {};

            DataService.getSongs()
                .then(
                    function songsReceived(songsResponse)
                    {
                        self.songs = SongPlayer.displayedAlbum.songs = songsResponse.data;
                    },
                    function songsRetreivalFailed(data)
                    {
                        console.log("error in Album service getAll()"); //------ To-do: handle error properly
                    }
                );


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
