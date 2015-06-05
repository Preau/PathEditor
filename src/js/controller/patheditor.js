angular.module('pathEditor', [])
    .controller('pathEditorController', function($scope, $http) {
        $scope.paths = [];

        $scope.getPaths = function() {
            $http.post('path_io.php',
                {action:'getpaths'})
                .success(function(data) {
                    $scope.paths = data;
            });
        };

        $scope.getPaths();
    });