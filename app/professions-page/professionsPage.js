var ProfessionsPageController = (function(){
    function ProfessionsPageController(
        currentProfessions,
        currentPaths,
        $location
    ) {
        this.professions = currentProfessions.getCurrentData().professions;
        this.currentPaths = currentPaths;
        this.currentProfessions = currentProfessions;
        this.$location = $location;
    }

    ProfessionsPageController.prototype.loadPaths = function(chosenProfession) {
        this.currentProfessions.setNewData(chosenProfession);
        this.currentPaths.setNewData(chosenProfession.educationPaths);
        this.$location.path('/paths');
    };

    ProfessionsPageController.$inject = [
        'currentProfessions',
        'currentPaths',
        '$location'
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

