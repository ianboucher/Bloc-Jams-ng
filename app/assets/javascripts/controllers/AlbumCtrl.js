"use strict"

angular
    .module("blocJams")
    .controller("AlbumCtrl", ["AlbumService", "SongPlayer", "$stateParams",
        function AlbumCtrl (AlbumService, SongPlayer, $stateParams)
        {
            var self = this;

            AlbumService.getAlbum($stateParams.id).then(
                function albumReceived(albumResponse)
                {
                    self.albumData = albumResponse.data;
                },
                function albumRetreivalFailed(data)
                {
                    console.log("error in Album service getAll()");
                }
            );

            self.songPlayer = SongPlayer;
        }
    ]);
