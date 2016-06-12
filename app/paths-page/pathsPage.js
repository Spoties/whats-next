var PathsPageController = (function(){
    function PathsPageController(
        currentPaths
    ) {
        this.paths = currentPaths.getCurrentData();
    }

    PathsPageController.$inject = [
        'currentPaths'
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

