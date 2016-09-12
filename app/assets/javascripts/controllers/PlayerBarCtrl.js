"use strict";

angular
    .module("blocJams")
    .controller("PlayerBarCtrl", ["SongPlayer", "$scope",
        function PlayerBarCtrl(SongPlayer, $scope)
        {
            self = this;

            self.songPlayer = SongPlayer;

            // use Bean library to listen for timeupdate event firing on SongPlayer
            bean.on(SongPlayer, "timeupdate", function() // To-do: encapsulate Bean in my own "Event Service"
            {
                $scope.$apply(function()
                {
                    $scope.time = SongPlayer.getCurrentTime() * 1000;
                });
            });
        }
    ]);
