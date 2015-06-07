angular.module('pathEditor', [])
    .controller('pathEditorController', function($scope, $http) {
        $scope.paths = [];

        //Retrieve PATH variable from system
        $scope.getPaths = function() {
            $http.get('path_io.php')
                .success(function(data) {
                    for(var i = 0; i < data.length; i++) {
                        $scope.paths.push({
                            name: data[i]
                        });
                    }
            });
        };

        //Get string to input back into PATH variable
        $scope.getPathString = function() {
            var path = '';
            for(var i = 0; i < $scope.paths.length; i++) {
                if(i > 0) {
                    path += ';';
                }
                path += $scope.paths[i].name;
            }
            return path;
        };

        //Sort paths alphabeticcally
        $scope.sortPaths = function() {
            $scope.paths.sort(function(a,b) {
                if(a.name > b.name) {
                    return 1;
                } else {
                    return -1;
                }
            });
        };

        //Delete an item from path
        $scope.deletePath = function(index) {
            $scope.paths.splice(index, 1);
        };

        $scope.addPath = function(path) {
            if(path != "") {
                $scope.paths.push({
                    name: path
                });
                $scope.newpath = "";
            }
        };

        $scope.getPaths();
    });