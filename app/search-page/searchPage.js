var SearchPageController = (function(){
    function SearchPageController(
        currentProfessions
    ){
        this.foundItems = [
            { name: 'Item one' },
            { name: 'Item two' },
            { name: 'Item three' }
        ];
        this.selectedItem = undefined;
        this.currentProfessions = currentProfessions;
    }

    SearchPageController.prototype.onSelect = function() {
        console.log(this.selectedItem);
    };

    SearchPageController.$inject = [
        'currentProfessions'
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

