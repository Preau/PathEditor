angular.module('pathEditor', ['ui.sortable'])
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

        //Sort path items alphabeticcally
        $scope.sortPaths = function() {
            $scope.paths.sort(function(a,b) {
                if(a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                } else {
                    return -1;
                }
            });
        };

        //Delete a path item
        $scope.deletePath = function(index) {
            $scope.paths.splice(index, 1);
        };

        //Add a path item
        $scope.addPath = function(path) {
            if(path !== "") {
                $scope.paths.push({
                    name: path
                });
                $scope.newpath = "";
            }
        };

        //Listeners for drag and drop
        $scope.dragControlListeners = {
            accept: function (sourceItemHandleScope, destSortableScope) {return true;}
        };

        $scope.getPaths();
    });