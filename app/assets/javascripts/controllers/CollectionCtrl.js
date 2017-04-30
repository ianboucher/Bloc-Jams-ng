(function()
{
    "use strict";

    angular
        .module("blocJams")
        .controller("CollectionCtrl", [
            "DataService",

            function CollectionCtrl(DataService)
            {
                var self = this;

                DataService.getCollection().then(function(albums)
                {
                    self.albums = albums.data;
                })
                .catch(function(error)
                {
                    console.log(error); // TODO: handle error properly
                });
            }
        ]);
})();
