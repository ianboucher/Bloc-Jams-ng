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

                if (Auth.isAuthenticated() || view !== "login" && view !== "register" && view !== "landing") {

                    Auth.currentUser().then(function(user)
                    {
                        $scope.user = user;
                    })
                    .catch(function(error)
                    {
                        console.log(error); // TODO: handle rejected authorization
                    });
                }


                $scope.$on("devise:new-registration", function(event, user)
                {
                    $scope.user = user;
                });


                $scope.$on("devise:login", function(event, user)
                {
                    $scope.user = user;
                });


                $scope.$on("devise:logout", function(event, user)
                {
                    $scope.user = {};
                });
            }
        ]);
})();
