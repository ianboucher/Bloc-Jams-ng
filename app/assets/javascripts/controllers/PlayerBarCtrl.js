"use strict";

angular
    .module("blocJams")
    .controller("PlayerBarCtrl", ["SongPlayer", "$scope",
        function PlayerBarCtrl(SongPlayer, $scope)
        {
            self = this;

            self.songPlayer = SongPlayer;

            self.getCurrentSongTitle = function()
            {
                // console.log(SongPlayer.currentSong.title);
                return SongPlayer.currentSong.title;
            };

            self.getSongDuration = function()
            {
                return SongPlayer.currentSong.duration;
            };

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
