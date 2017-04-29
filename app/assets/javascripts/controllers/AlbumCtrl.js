"use strict";

angular
    .module("blocJams")
    .controller("AlbumCtrl", ["SongPlayer", "DataService", "$stateParams",
        function AlbumCtrl(SongPlayer, DataService, $stateParams)
        {
            var self = this;

            DataService.getAlbum($stateParams.id)
                .then(
                    function albumsReceived(albumResponse)
                    {
                        self.albumData = SongPlayer.displayedAlbum = albumResponse.data;
                    },
                    function albumRetreivalFailed(data)
                    {
                        console.log("error in Album service getAll()");
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
