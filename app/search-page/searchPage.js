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
        this.categoryService.getDetails(this.selectedItem)
            .then(this.resolveResultsType.bind(this));
    };

    SearchPageController.prototype.resolveResultsType = function(queryResults) {
        this.currentProfessions.setNewData(queryResults);
        if (this.isProfessionsCategory(queryResults)) {
            this.$location.path('/professions');
        }
        else {
            this.$location.path('/paths');
        }
    };

    SearchPageController.prototype.isProfessionsCategory = function(dataToCheck){
        return 'professions' in dataToCheck;
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

