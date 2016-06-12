var Page = (function() {
    function Page(
        $location
    ) {
        this.$location = $location;
    }

    Page.prototype.goHome = function() {
        this.$location.path('/');
    };

    Page.$inject = [
        '$location'
    ];

    return Page;
})();

angular.module('myApp').component('page', {
    controller: Page,
    controllerAs: 'page',
    templateUrl: 'components/page-component/pageComponent.html'
});
