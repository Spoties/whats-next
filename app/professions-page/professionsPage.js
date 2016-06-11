var ProfessionsPageController = (function(){
    function ProfessionsPageController(
        currentProfessions
    ) {
        this.professions = currentProfessions.getCurrentData().professions;
    }

    ProfessionsPageController.$inject = [
        'currentProfessions'
    ];
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

