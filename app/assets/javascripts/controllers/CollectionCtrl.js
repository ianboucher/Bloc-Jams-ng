"use strict";

angular
    .module("blocJams")
    .controller("CollectionCtrl", ["DataService",
        function CollectionCtrl(DataService)
        {
            var self = this;

            DataService.getCollection()
                .then(
                    function albumsReceived(albumResponse)
                    {
                        self.albums = albumResponse.data;
                    },
                    function albumRetreivalFailed(data)
                    {
                        console.log("error in Album service getAll()"); //------ To-do: handle error properly
                    }
                );
        }
    ]);
