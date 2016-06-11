var SearchPageController = (function(){
    function SearchPageController(){
        console.log('search page onInit');
        this.title = 'Search autocomplete';
    }

    return SearchPageController;
})();

function configSearchPageRoute($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'search-page/searchPage.html',
        controller: SearchPageController,
        controllerAs: 'searchPage'
    });
}
configSearchPageRoute.$inject = ['$routeProvider'];

angular.module('myApp.searchPage', ['ngRoute'])
    .config(configSearchPageRoute);

