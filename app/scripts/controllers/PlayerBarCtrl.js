angular
    .module("blocJams")
    .controller("PlayerBarCtrl", ["Fixtures", "SongPlayer", "$scope", 
        function PlayerBarCtrl(Fixtures, SongPlayer, $scope)
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

// on "play" currentBuzzObject is set
// at this point, timeupdate event and callback/handler needs to be bound to currentBuzzObject
// the output of this handler needs to be passed to the view
