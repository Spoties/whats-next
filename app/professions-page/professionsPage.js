var ProfessionsPageController = (function(){
    function ProfessionsPageController() {
        console.log('professions page init');
    }

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

