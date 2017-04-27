"use strict";

angular
    .module("blocJams")
    .controller("NewPlaylistCtrl", ["CommitDataService", "$scope", "$state",
        function NewPlaylistCtrl(CommitDataService, $scope, $state)
        {
            var self = this;

            $scope.addPlaylist = function(name)
            {
                CommitDataService.newPlaylist(name)
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
