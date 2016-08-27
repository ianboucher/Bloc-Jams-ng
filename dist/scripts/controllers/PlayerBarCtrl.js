"use strict"

angular
    .module("blocJams")
    .controller("PlayerBarCtrl", ["Fixtures", "SongPlayer", "$scope",
        function PlayerBarCtrl (Fixtures, SongPlayer, $scope)
        {
            this.albumData  = Fixtures.getAlbum();
            this.songPlayer = SongPlayer;

            // use Bean library to listen for timeupdate event firing on SongPlayer
            bean.on (SongPlayer, "timeupdate", function()
            {
                $scope.$apply(function()
                {
                    $scope.time = SongPlayer.getCurrentTime();
                });
            });
        }
    ]);
