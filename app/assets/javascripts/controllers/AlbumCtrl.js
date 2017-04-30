(function()
{
    "use strict";

    angular
        .module("blocJams")
        .controller("AlbumCtrl", [
            "SongPlayer",
            "DataService",
            "$stateParams",

            function AlbumCtrl(SongPlayer, DataService, $stateParams)
            {
                var self = this;

                DataService.getAlbum($stateParams.id).then(function(album)
                {
                    self.albumData = SongPlayer.displayedAlbum = album.data;
                })
                .catch(function(error)
                {
                    console.log(error);
                });

                /*
                * function play
                * @desc Initiates playing of currently selected song
                * @param {Object} song, {int} index
                */
                self.play = function(song, index)
                {
                    SongPlayer.play(song, index);
                    SongPlayer.currentAlbum = SongPlayer.displayedAlbum;
                };

                /*
                * function pauses
                * @desc Pauses playing of currently selected song
                * @param {Object} song
                */
                self.pause = function(song)
                {
                    SongPlayer.pause(song);
                };
            }
        ]);
})();
