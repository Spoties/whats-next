var SearchPageController = (function(){
    function SearchPageController(){
        this.foundItems = [
            { name: 'Item one' },
            { name: 'Item two' },
            { name: 'Item three' }
        ];
        this.selectedItem = undefined;
    }

    SearchPageController.prototype.onSelect = function() {
        console.log(this.selectedItem);
    };

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

