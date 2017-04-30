(function()
{
    "use strict";

    angular
        .module("blocJams")
        .controller("SongsCtrl", [
            "DataService",
            "SongPlayer",

            function SongsCtrl(DataService, SongPlayer)
            {
                var self = this;

                SongPlayer.displayedAlbum = {};

                DataService.getSongs().then(function(songs)
                {
                    self.songs = SongPlayer.displayedAlbum.songs = songs.data;
                })
                .catch(function(error)
                {
                    console.log(error); // TODO:  handle error properly
                });


                self.play = function(song, index)
                {
                    SongPlayer.play(song, index);
                    SongPlayer.currentAlbum = SongPlayer.displayedAlbum;
                };
                

                self.pause = function(song)
                {
                    SongPlayer.pause(song);
                };
            }
        ]);
})();
