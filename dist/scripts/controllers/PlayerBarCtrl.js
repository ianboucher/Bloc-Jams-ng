angular
    .module("blocJams")
    .controller("PlayerBarCtrl", ["Fixtures", "SongPlayer", "$scope",
        function PlayerBarCtrl (Fixtures, SongPlayer, $scope)
        {
            this.albumData  = Fixtures.getAlbum();
            this.songPlayer = SongPlayer;

            SongPlayer.addEventListener("timeupdate", function()
            {
                $scope.$apply(function()
                {
                    $scope.time = SongPlayer.getCurrentTime();
                });
            });
        }
    ]);
