angular.module('pathEditor', [])
    .controller('pathEditorController', function($scope, $http) {
        $scope.paths = [];

        //Retrieve PATH variable from system
        $scope.getPaths = function() {
            $http.get('path_io.php')
                .success(function(data) {
                    $scope.paths = data;
            });
        };

        //Get string to input back into PATH variable
        $scope.getPathString = function() {
            return $scope.paths.join(';');
        };

        //Sort paths alphabeticcally
        $scope.sortPaths = function() {
            $scope.paths.sort();
        };

        $scope.getPaths();
    });