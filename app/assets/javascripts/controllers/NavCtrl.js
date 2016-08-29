"use strict"

angular
    .module("blocJams")
    .controller("NavCtrl", ["$scope", "Auth", function ($scope, Auth)
        {
            $scope.signedIn = Auth.isAuthenticated;
            $scope.logout   = Auth.logout;

            Auth.currentUser().then(function(user)
            {
                $scope.user = user;
            });

            $scope.$on("devise:new-registration", function (event, user)
            {
                $scope.user = user;
            });

            $scope.$on("devise:login", function (event, user)
            {
                $scope.user = user;
            });

            $scope.$on("devise:logout", function (event, user)
            {
                $scope.user = {};
            }); 
        }
    ]);
