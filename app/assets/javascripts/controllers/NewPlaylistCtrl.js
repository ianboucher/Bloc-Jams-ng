"use strict";

angular
    .module("blocJams")
    .controller("NewPlaylistCtrl", ["DataService", "$scope", "$state",
        function NewPlaylistCtrl(DataService, $scope, $state)
        {
            var self = this;

            $scope.addPlaylist = function(name)
            {
                DataService.newPlaylist(name)
                    .then(
                        function(playlist)
                        {
                            $state.go("playlist", {id: playlist.data.id});
                        },
                        function()
                        {
                            console.log("failure!");
                        }
                    );
            }

        }
    ]);
