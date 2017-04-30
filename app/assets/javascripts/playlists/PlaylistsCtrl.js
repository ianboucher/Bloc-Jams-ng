(function()
{
    "use strict";

    angular
        .module("blocJams")
        .controller("PlaylistsCtrl", [
            "DataService",

            function PlaylistsCtrl(DataService)
            {
                var self = this;

                DataService.getPlaylists().then(function(playlists)
                {
                    self.index = playlists.data;
                })
                .catch(function(error)
                {
                    console.log(error); // TODO: handle error properly
                });
            }
        ]);
})();
