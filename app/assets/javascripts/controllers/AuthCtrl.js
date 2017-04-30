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
