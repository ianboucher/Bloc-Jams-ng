(function()
{
    "use strict";

    angular
        .module("blocJams")
        .controller("PlayerBarCtrl", [
            "SongPlayer",
            "$scope",

            function PlayerBarCtrl(SongPlayer, $scope)
            {
                self = this;

                self.currentSong  = SongPlayer.currentSong;
                self.currentAlbum = SongPlayer.currentAlbum;
                self.volume       = SongPlayer.volume;
                self.maxVolume    = SongPlayer.maxVolume;
                self.time         = SongPlayer.getCurrentTime() * 1000;

                /*
                * @desc Sets current song/album upon song change event
                * @listens songupdate
                * @param {songupdate} event
                */
                bean.on(SongPlayer, "songupdate", function()
                {
                        self.currentSong  = SongPlayer.currentSong;
                        self.currentAlbum = SongPlayer.currentAlbum;
                });

                /*
                * @desc Sets the current playing time upon timeupdate event
                * @listens timeupdate
                * @param {timeupdate} event
                */
                bean.on(SongPlayer, "timeupdate", function() // TODO: encapsulate Bean in my own "Event Service"
                {
                    $scope.$apply(function()
                    {
                        self.time = SongPlayer.getCurrentTime() * 1000;
                    });
                });

                /*
                * function playerBar.setCurrentTime
                * @desc Passes the current playing time to SongPlayer service
                * @param {number} value
                */
                self.setCurrentTime = function(value)
                {
                    SongPlayer.setCurrentTime(value)
                };

                /*
                * function playerBar.setVolume
                * @desc Passes the required volume to SongPlayer service
                * @param {number} value
                */
                self.setVolume = function(value)
                {
                    SongPlayer.setVolume(value);
                };

                /*
                * function playerBar.play
                * @desc Initiates playing of the currently selected song
                * @param
                */
                self.play = function()
                {
                    SongPlayer.play();
                };

                /*
                * function playerBar.play
                * @desc Pauses playing of the currently selected song
                * @param
                */
                self.pause = function()
                {
                    SongPlayer.pause();
                };

                /*
                * function playerBar.next
                * @desc Skips to the next song
                * @param
                */
                self.next = function()
                {
                    SongPlayer.next();
                };

                /*
                * function playerBar.previous
                * @desc Skips to the previous song
                * @param
                */
                self.previous = function()
                {
                    SongPlayer.previous();
                };
            }
        ]);
})();
