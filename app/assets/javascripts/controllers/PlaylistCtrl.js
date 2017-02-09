"use strict";

angular
    .module("blocJams")
    .controller("PlaylistCtrl", ["RequestDataService", "$stateParams", "SongPlayer",
        function PlaylistCtrl(RequestDataService, $stateParams, SongPlayer)
        {
            var self = this;

            RequestDataService.getPlaylist($stateParams.id)
                .then(
                    function playlistReceived(playlistResponse)
                    {
                        self.songs = SongPlayer.displayedAlbum = playlistResponse.data;
                    },
                    function playlistRetreivalFailed(data)
                    {
                        console.log("error in Album service getAll()"); //------ To-do: handle error properly
                    }
                );


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
