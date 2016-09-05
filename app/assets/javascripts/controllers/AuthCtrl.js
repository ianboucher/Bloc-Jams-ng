// "use strict"; Might break (poorly written) 3rd party libraries

angular
    .module("blocJams")
    .controller("AuthCtrl", ["$scope", "$state", "Auth",
        function ($scope, $state, Auth)
        {
            "use strict"; // Accepted JS community method

            $scope.login = function ()
            {
                Auth.login($scope.user).then(function ()
                {
                    $state.go("landing");
                });
            };

            $scope.register = function ()
            {
                Auth.register($scope.user).then(function ()
                {
                    $state.go("landing");
                });
            };
        }
    ]);
