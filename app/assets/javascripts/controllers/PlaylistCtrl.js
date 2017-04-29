"use strict";

angular
    .module("blocJams")
    .controller("PlaylistCtrl", ["RequestDataService", "CommitDataService", "$stateParams", "SongPlayer",
        function PlaylistCtrl(RequestDataService, CommitDataService, $stateParams, SongPlayer)
        {
            var self = this;

            RequestDataService.getPlaylist($stateParams.id)
                .then(
                    function playlistReceived(playlistResponse)
                    {
                        self.id    = playlistResponse.data.id;
                        self.name  = playlistResponse.data.name;
                        self.songs = SongPlayer.displayedAlbum = playlistResponse.data.songs;
                    },
                    function playlistRetreivalFailed(data)
                    {
                        console.log("error in Album service getAll()"); //------ To-do: handle error properly
                    }
                );

                self.remove = function(song, index)
                {
                    console.log(song);
                    console.log(index);
                    CommitDataService.removePlaylisting($stateParams.id, song.id.toString())
                        .then(function(playlisting)
                        {
                            // remove song from self.songs
                            self.songs.splice(index, 1);
                        })
                        .catch(function(error){
                            console.log(error);
                        })
                };


                // bean.on(SongPlayer, "songupdate", function()
                // {
                //     var songs  = self.songs,
                //         nSongs = songs.length;
                //
                //     for (var i = 0; i < nSongs; i += 1)
                //     {
                //         if (songs[i].id === SongPlayer.currentSong.id)
                //         {
                //             songs[i].playing = SongPlayer.currentSong.playing;
                //         }
                //         else
                //         {
                //             songs[i].playing = false;
                //         }
                //     }
                // });


                self.play = function(song, index)
                {
                    SongPlayer.play(song, index);
                    SongPlayer.currentAlbum = SongPlayer.displayedAlbum;
                };


                self.pause = function(song)
                {
                    SongPlayer.pause(song);
                }

        }
    ]);
