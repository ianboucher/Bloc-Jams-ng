"use strict"

angular
    .module("blocJams")
    .controller("AlbumCtrl", ["albumData", "SongPlayer",
        function AlbumCtrl(albumData, SongPlayer)
        {
            // set single source for album data from state resolution data
            SongPlayer.currentAlbum = albumData;

            var self = this;

            self.albumData = SongPlayer.currentAlbum;

            self.play = function(song)
            {
                SongPlayer.play(song);
            };

            self.pause = function(song)
            {
                SongPlayer.pause(song);
            }
        }
    ]);
