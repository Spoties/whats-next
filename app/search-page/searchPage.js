var SearchPageController = (function(){
    function SearchPageController(
        currentProfessions,
        categoryService,
        $location
    ){
        this.foundItems = [];
        this.selectedItem = undefined;
        this.searchText = undefined;
        this.currentProfessions = currentProfessions;
        this.categoryService = categoryService;
        this.$location = $location;
    }

    SearchPageController.prototype.onInput = function() {
        if (!this.searchText) {
            return;
        }
        this.foundItems = this.categoryService.search(this.searchText);
    };

    SearchPageController.prototype.onSelect = function() {
        this.$location.path('/professions');
    };

    SearchPageController.$inject = [
        'currentProfessions',
        'categoryService',
        '$location'
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

angular.module('myApp')
    .config(configSearchPageRoute);

