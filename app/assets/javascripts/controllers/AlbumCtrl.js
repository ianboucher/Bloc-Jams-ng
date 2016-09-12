"use strict";

angular
    .module("blocJams")
    .controller("AlbumCtrl", ["SongPlayer", "RequestDataService", "$stateParams",
        function AlbumCtrl(SongPlayer, RequestDataService, $stateParams)
        {
            var self = this;

            self.play = function(song)
            {
                SongPlayer.play(song);
            };

            self.pause = function(song)
            {
                SongPlayer.pause(song);
            }

            RequestDataService.getAlbum($stateParams.id).then(
                function albumsReceived(albumResponse)
                {
                    self.albumData = albumResponse.data;
                    SongPlayer.displayedAlbum = self.albumData;
                },
                function albumRetreivalFailed(data)
                {
                    console.log("error in Album service getAll()");
                }
            );
        }
    ]);
