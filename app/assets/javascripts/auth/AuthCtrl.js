(function()
{
    "use strict";

    angular
        .module("blocJams")
        .controller("AuthCtrl", [
            "$scope",
            "$state",
            "Auth",

            function ($scope, $state, Auth)
            {
                var self = this;

                self.heroTitle = "Sign-up. Tune-in!";
                self.welcome   = "Welcome Back!";

                /*
                * function login
                * @desc Authorizes user with provided credentials
                * @param {Object} user
                */
                $scope.login = function()
                {
                    Auth.login($scope.user).then(function()
                    {
                        $state.go("collection");
                    })
                    .catch(function(error){
                        console.log(error); // TODO: handle error properly
                    });
                };

                /*
                * function register
                * @desc Creates a new user with provided credentials
                * @param {Object} user
                */
                $scope.register = function()
                {
                    Auth.register($scope.user).then(function()
                    {
                        $state.go("collection");
                    });
                };
            }
        ]);
})();
