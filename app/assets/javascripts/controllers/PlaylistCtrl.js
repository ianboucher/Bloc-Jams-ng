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
