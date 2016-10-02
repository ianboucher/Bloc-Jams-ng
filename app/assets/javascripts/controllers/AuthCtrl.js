"use strict";

angular
    .module("blocJams")
    .controller("AuthCtrl", ["$scope", "$state", "Auth",
        function ($scope, $state, Auth)
        {
            {
                this.heroTitle = "Sign-up. Tune-in!";
            }

            {
                this.welcome = "Welcome Back!";
            }

            $scope.login = function()
            {
                Auth.login($scope.user).then(function()
                {
                    $state.go("collection");
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
