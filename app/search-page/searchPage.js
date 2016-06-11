var SearchPageController = (function(){
    function SearchPageController(
        currentProfessions,
        categoryService
    ){
        this.foundItems = [];
        this.selectedItem = undefined;
        this.searchText = undefined;
        this.currentProfessions = currentProfessions;
        this.categoryService = categoryService;
    }

    SearchPageController.prototype.onInput = function() {
        if (!this.searchText) {
            return;
        }
        this.foundItems = this.categoryService.search(this.searchText);
    };

    SearchPageController.prototype.onSelect = function() {
        console.log(this.selectedItem);
    };

    SearchPageController.$inject = [
        'currentProfessions',
        'categoryService'
    ];

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

