angular
    .module("blocJams", ["ui.router", "templates", "Devise"])
    .config(function ($stateProvider, $locationProvider)
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
                    "url"         : "/album/:id",
                    "controller"  : "AlbumCtrl as album",
                    "templateUrl" : "album.html"
                }
            )
            .state
            (
                "login",
                {
                    "url"         : "/login",
                    "controller"  : "AuthCtrl as auth",
                    "templateUrl" : "login.html",
                    "onEnter"     : ["$state", "Auth", function($state, Auth)
                                    {
                                        Auth.currentUser().then(function ()
                                        {
                                            $state.go("landing");
                                        });
                                    }]
                }
            )
            .state
            (
                "register",
                {
                    "url"         : "/register",
                    "controller"  : "AuthCtrl as auth",
                    "templateUrl" : "register.html",
                    "onEnter"     : ["$state", "Auth", function ($state, Auth)
                                    {
                                        Auth.currentUser().then(function ()
                                        {
                                            $state.go("landing");
                                        });
                                    }]
                }
            )
    });
