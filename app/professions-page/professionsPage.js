var ProfessionsPageController = (function(){
    function ProfessionsPageController() {
        this.professions = [
            { name: 'Prof 1'},
            { name: 'Prof 2'},
            { name: 'Prof 3'},
            { name: 'Prof 4'}
        ];
    }

    return ProfessionsPageController;
})();

function configProfessionsPageRoute($routeProvider) {
    $routeProvider.when('/professions', {
        templateUrl: 'professions-page/professionsPage.html',
        controller: ProfessionsPageController,
        controllerAs: 'professionsPage'
    });
}
configProfessionsPageRoute.$inject = ['$routeProvider'];

angular.module('myApp.searchPage', ['ngRoute'])
    .config(configProfessionsPageRoute);

