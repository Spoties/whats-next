var Page = (function() {
    function Page(categoryService) {
        this.isNavDisplayed = false;
        this.categoryService = categoryService;
    }

    Page.$inject = [ 'categoryService' ];

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
