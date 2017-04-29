"use strict";

angular
    .module("blocJams")
    .controller("PlaylistsCtrl", ["DataService",
        function PlaylistsCtrl(DataService)
        {
            var self = this;

            DataService.getPlaylists()
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
                DataService.newPlaylist(name)
                    .then(
                        function(data)
                        {
                            console.log(data);
                        },
                        function()
                        {
                            console.log("failure!");
                        }
                    );
            }
        }
    ]);
