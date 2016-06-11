var PathsPageController = (function(){
    function PathsPageController(
        currentProfessions
    ) {
        console.log(currentProfessions.getCurrentData());
    }

    PathsPageController.$inject = [
        'currentProfessions'
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

