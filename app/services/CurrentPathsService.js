var CurrentPathsService = (function(){
    function CurrentPathsService() {
        this.currentPaths = [];
    }

    CurrentPathsService.prototype.setNewData  = function(newPaths) {
        this.currentPaths = newPaths;
    };

    CurrentPathsService.prototype.getCurrentData = function() {
        return this.currentPaths;
    };

    return CurrentPathsService;
})();

angular.module('myApp')
    .service('currentPaths', CurrentPathsService);
