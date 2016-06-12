var PathsPageController = (function(){
    function PathsPageController(
        currentProfessions,
        currentPaths,
        $location
    ) {
        this.paths = currentPaths.getCurrentData();
        this.profession = currentProfessions.getCurrentData();
        this.$location = $location;
    }

    PathsPageController.prototype.loadDetails = function() {
        this.$location.path('/details');
    };

    PathsPageController.$inject = [
        'currentProfessions',
        'currentPaths',
        '$location'
    ];

    return PathsPageController;
})();

function configPathsPageRoute($routeProvider) {
    $routeProvider.when('/paths', {
        templateUrl: 'paths-page/pathsPage.html',
        controller: PathsPageController,
        controllerAs: 'pathsPage'
    });
}
configPathsPageRoute.$inject = ['$routeProvider'];

angular.module('myApp')
    .config(configPathsPageRoute);

