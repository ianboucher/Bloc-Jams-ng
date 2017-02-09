"use strict";

angular
    .module("blocJams")
    .controller("PlaylistsCtrl", ["RequestDataService",
        function PlaylistsCtrl(RequestDataService)
        {
            var self = this;

            RequestDataService.getPlaylists()
                .then(
                    function playlistsReceived(playlistResponse)
                    {
                        self.index = playlistResponse.data;
                    },
                    function playlistsRetreivalFailed(data)
                    {
                        console.log("error in Album service getAll()"); //------ To-do: handle error properly
                    }
                );

            function addPlaylist(name)
            {
                CommitDataService.newPlaylist(name)
                    .then(
                        function()
                        {
                            console.log("success!");
                        },
                        function()
                        {
                            console.log("failure!");
                        }
                    );
            }
        }
    ]);
