var Page = (function() {
    function Page() {
        this.isNavDisplayed = false;
    }

    Page.prototype.$onInit = function () {
        console.log('page onInit');
    };

    Page.prototype.showNav = function() {
        this.isNavDisplayed = true;
    };

    Page.prototype.hideNav = function() {
        this.isNavDisplayed = false;
    };

    return Page;
})();

angular.module('myApp').component('page', {
    controller: Page,
    controllerAs: 'page',
    templateUrl: 'components/page-component/pageComponent.html'
});
