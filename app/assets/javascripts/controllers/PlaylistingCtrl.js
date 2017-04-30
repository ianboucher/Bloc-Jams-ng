(function()
{
    "use strict";

    angular
        .module("blocJams")
        .controller("PlaylistingCtrl", [
            "DataService",
            "SongPlayer",
            "$stateParams",

            function PlaylistingCtrl(DataService, SongPlayer, $stateParams)
            {
                var self = this;

                SongPlayer.displayedAlbum = {};

                DataService.getSongs().then(function(songs)
                {
                    self.songs = songs.data;
                })
                .catch(function(error)
                {
                    // TODO: Handle error properly
                    console.log(error);
                });

                /*
                * function playlisting.add
                * @desc Creates a new playlisting - add song to playlist
                * @param {Object} song
                */
                self.add = function(song)
                {
                    DataService.newPlaylisting($stateParams.id, song.id)
                        .then(function(playlisting)
                        {
                            console.log(playlisting); // TODO: success message
                        })
                        .catch(function(error){
                            console.log(error);
                        })
                };

                /*
                * function playlisting.play
                * @desc Plays currently selected song and updates player bar display
                * @param {Object} song, {number} index
                */
                self.play = function(song, index)
                {
                    SongPlayer.play(song, index);
                    SongPlayer.currentAlbum = SongPlayer.displayedAlbum;
                };

                /*
                * function playlisting.play
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
