var CurrentProfessionsService = (function(){
    function CurrentProfessionsService() {
        this.currentProfessions = [];
    }

    CurrentProfessionsService.prototype.setNewData  = function(newProfessions) {
        this.currentProfessions = newProfessions;
    };

    CurrentProfessionsService.prototype.getCurrentData = function() {
        return this.currentProfessions;
    };

    return CurrentProfessionsService
})();

angular.module('myApp')
    .service('currentProfessions', CurrentProfessionsService);
