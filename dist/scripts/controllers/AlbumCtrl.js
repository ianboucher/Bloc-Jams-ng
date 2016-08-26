angular
    .module("blocJams")
    .controller("AlbumCtrl", ["Fixtures", "SongPlayer",
        function AlbumCtrl (Fixtures, SongPlayer)
        {
            this.albumData  = Fixtures.getAlbum()
            this.songPlayer = SongPlayer;
        }
    ]);
