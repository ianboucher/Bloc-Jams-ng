angular
    .module ("blocJams", ["ui.router", "templates"])
    .config (function ($stateProvider, $locationProvider)
    {
        $locationProvider
            .html5Mode
            ({
                "enabled": true,
                "requireBase": false
            });

        $stateProvider
            .state
            (
                "landing",
                {
                    "url"         : "/",
                    "controller"  : "LandingCtrl as landing",
                    "templateUrl" : "landing.html"
                }
            )
            .state
            (
                "collection",
                {
                    "url"         : "/collection",
                    "controller"  : "CollectionCtrl as collection",
                    "templateUrl" : "collection.html"
                }
            )
            .state
            (
                "album",
                {
                    "url"         : "/album",
                    "controller"  : "AlbumCtrl as album",
                    "templateUrl" : "album.html"
                }
            );
    });
