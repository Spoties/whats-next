var DetailsPageController = (function(){
    function DetailsPageController() {}

    return DetailsPageController;
})();

function configDetailsPageRoute($routeProvider) {
    $routeProvider.when('/details', {
        templateUrl: 'details-page/detailsPage.html',
        controller: DetailsPageController,
        controllerAs: 'detailsPage'
    });
}
configDetailsPageRoute.$inject = ['$routeProvider'];

angular.module('myApp')
    .config(configDetailsPageRoute);

