(function()
{
    "use strict";

    angular
        .module("blocJams")
        .controller("NewPlaylistCtrl", [
            "$scope",
            "$state",
            "DataService",

            function NewPlaylistCtrl($scope, $state, DataService)
            {
                var self = this;

                /*
                * function newPlaylist.add
                * @desc Creates a new empty playlist
                * @param {String} name, {String} description
                */
                self.add = function(name, description)
                {
                    DataService.newPlaylist(name, description).then(function(playlist)
                    {
                        $state.go("playlist", { id: playlist.data.id });
                    })
                    .catch(function(error)
                    {
                        console.log(error); // TODO: handle error properly
                    });
                }
            }
        ]);
})();
