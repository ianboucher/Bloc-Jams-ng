(function()
{
    "use strict";

    angular
        .module("blocJams")
        .controller("PlaylistCtrl", [
            "DataService",
            "$stateParams",
            "SongPlayer",

            function PlaylistCtrl(DataService, $stateParams, SongPlayer)
            {
                var self = this;

                DataService.getPlaylist($stateParams.id).then(function(playlist)
                {
                    self.id    = playlist.data.id;
                    self.name  = playlist.data.name;
                    self.songs = SongPlayer.displayedAlbum = playlist.data.songs;
                })
                .catch(function(error)
                {
                    console.log("error"); //------ To-do: handle error properly
                });

                /*
                * function playlist.remove
                * @desc Removes the selected song from the playlist
                * @param {Object} song, {number} index
                */
                self.remove = function(song, index)
                {
                    DataService.removePlaylisting(self.id, song.id)
                        .then(function(playlisting)
                        {
                            self.songs.splice(index, 1);
                        })
                        .catch(function(error){
                            console.log(error);
                        })
                };

                /*
                * function playlist.play
                * @desc Plays currently selected song and updates player bar display
                * @param {Object} song, {number} index
                */
                self.play = function(song, index)
                {
                    SongPlayer.play(song, index);
                    SongPlayer.currentAlbum = SongPlayer.displayedAlbum;
                };

                /*
                * function playlist.play
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
