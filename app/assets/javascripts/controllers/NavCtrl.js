(function()
{
    "use strict"

    angular
        .module("blocJams")
        .controller("NavCtrl", [
            "$scope",
            "$state",
            "Auth",

            function NavCtrl($scope, $state, Auth)
            {
                $scope.signedIn = Auth.isAuthenticated;
                $scope.logout   = Auth.logout;

                var view = $state.current.name;

                if (Auth.isAuthenticated() || view !== "login" && view !== "register" && view !== "landing")
                {
                    Auth.currentUser().then(function(user)
                    {
                        $scope.user = user;
                    })
                    .catch(function(error)
                    {
                        console.log(error); // TODO: handle rejected authorization
                    });
                }

                /*
                * @desc Sets current user upon new-registration event
                * @listens devise:new-registration
                * @param {devise:new-registration} event, {Object} user
                */
                $scope.$on("devise:new-registration", function(event, user)
                {
                    $scope.user = user;
                });

                /*
                * @desc Sets current user upon login event
                * @listens devise:login
                * @param {devise:login} event, {Object} user
                */
                $scope.$on("devise:login", function(event, user)
                {
                    $scope.user = user;
                });

                /*
                * @desc Deletes current user upon logout event
                * @listens devise:logout
                * @param {devise:logout} event, {Object} user
                */
                $scope.$on("devise:logout", function(event, user)
                {
                    $scope.user = {};
                });
            }
        ]);
})();
