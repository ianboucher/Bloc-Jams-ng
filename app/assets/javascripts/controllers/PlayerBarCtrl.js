"use strict";

angular
    .module("blocJams")
    .controller("PlayerBarCtrl", ["SongPlayer", "$scope",
        function PlayerBarCtrl(SongPlayer, $scope)
        {
            self = this;

            self.albumData = SongPlayer.currentAlbum;

            self.songTitle = function()
            {
                return SongPlayer.currentSong;
            };

            self.play = function()
            {
                SongPlayer.play();
            };

            self.pause = function()
            {
                SongPlayer.pause();
            };

            self.next = function()
            {
                SongPlayer.next();
            }

            self.previous = function()
            {
                SongPlayer.previous();
            };

            self.setCurrentTime = function()
            {
                SongPlayer.setCurrentTime();
            }


            // use Bean library to listen for timeupdate event firing on SongPlayer
            bean.on (SongPlayer, "timeupdate", function() // To-do: encapsulate Bean in my own "Event Service"
            {
                $scope.$apply(function()
                {
                    $scope.time = SongPlayer.getCurrentTime() * 1000;
                });
            });

            // PLAY, PAUSE, NEXT, PREVIOUS, SONG TITLE, artist, duration, setCurrentTime,
        }
    ]);
