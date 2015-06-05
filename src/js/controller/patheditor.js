angular.module('pathEditor', [])
    .controller('pathEditorController', function($scope, $http) {
        $scope.paths = [];

        //Retrieve PATH variable from system
        $scope.getPaths = function() {
            $http.post('path_io.php',
                {action:'getpaths'})
                .success(function(data) {
                    $scope.paths = data;
            });
        };

        //Get string to input back into PATH variable
        $scope.getPathString = function() {
            return $scope.paths.join(';');
        };

        $scope.getPaths();
    });