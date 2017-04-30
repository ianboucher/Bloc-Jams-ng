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
