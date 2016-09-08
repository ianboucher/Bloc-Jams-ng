"use strict";

angular
    .module("blocJams")
    .controller("CollectionCtrl", ["AlbumService",
        function CollectionCtrl(AlbumService)
        {
            var self = this;

            AlbumService.getAll()
                .then(
                    function albumsReceived(albumResponse)
                    {
                        self.albums = albumResponse.data;
                    },
                    function albumRetreivalFailed(data)
                    {
                        console.log("error in Album service getAll()");
                    }
                );
        }
    ]);
