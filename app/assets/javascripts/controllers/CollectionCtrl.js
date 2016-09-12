"use strict";

angular
    .module("blocJams")
    .controller("CollectionCtrl", ["RequestDataService",
        function CollectionCtrl(RequestDataService)
        {
            var self = this;

            RequestDataService.getCollection()
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
