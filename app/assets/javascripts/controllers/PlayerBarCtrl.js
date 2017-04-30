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

                // using "Bean" library to emit/listen for events firing on SongPlayer
                // to update player bar info.
                bean.on(SongPlayer, "songupdate", function()
                {
                        self.currentSong  = SongPlayer.currentSong;
                        self.currentAlbum = SongPlayer.currentAlbum;
                });


                bean.on(SongPlayer, "timeupdate", function() // TODO: encapsulate Bean in my own "Event Service"
                {
                    $scope.$apply(function()
                    {
                        self.time = SongPlayer.getCurrentTime() * 1000;
                    });
                });


                self.setCurrentTime = function(value)
                {
                    SongPlayer.setCurrentTime(value)
                };


                self.setVolume = function(value)
                {
                    SongPlayer.setVolume(value);
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
                };


                self.previous = function()
                {
                    SongPlayer.previous();
                };
            }
        ]);
})();
