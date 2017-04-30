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

                /*
                * function songlist.play
                * @desc Plays currently selected song and updates player bar display
                * @param {Object} song, {number} index
                */
                self.play = function(song, index)
                {
                    SongPlayer.play(song, index);
                    SongPlayer.currentAlbum = SongPlayer.displayedAlbum;
                };

                /*
                * function songlist.play
                * @desc Pauses currently selected song
                * @param {Object} song
                */
                self.pause = function(song)
                {
                    SongPlayer.pause(song);
                };
            }
        ]);
})();
