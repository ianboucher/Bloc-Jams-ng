"use strict";

angular
    .module("blocJams")
    .controller("NewPlaylistCtrl", ["CommitDataService", "$scope",
        function NewPlaylistCtrl(CommitDataService, $scope)
        {
            var self = this;

            $scope.addPlaylist = function(name)
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
