"use strict";

angular
    .module("blocJams")
    .controller("PlayerBarCtrl", ["AlbumService", "SongPlayer", "$scope", "$stateParams",
        function PlayerBarCtrl (AlbumService, SongPlayer, $scope, $stateParams)
        {
            this.albumData  = AlbumService.getAlbum($stateParams.id);
            this.songPlayer = SongPlayer;

            // use Bean library to listen for timeupdate event firing on SongPlayer
            bean.on (SongPlayer, "timeupdate", function() // To-do: encapsulate Bean in my own "Event Service"
            {
                $scope.$apply(function()
                {
                    $scope.time = SongPlayer.getCurrentTime();
                });
            });
        }
    ]);
