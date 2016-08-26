angular
    .module("blocJams")
    .controller("CollectionCtrl", ["Fixtures",
        function CollectionCtrl (Fixtures)
        {
            this.albums = Fixtures.getCollection(12);
        }
    ]);
