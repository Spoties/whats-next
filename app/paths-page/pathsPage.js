var PathsPageController = (function(){
    function PathsPageController(
        currentProfessions,
        currentPaths
    ) {
        this.paths = currentPaths.getCurrentData();
        this.profession = currentProfessions.getCurrentData();
    }

    PathsPageController.$inject = [
        'currentProfessions',
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

