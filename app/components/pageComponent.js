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
    template: `
    <div class="page">
        <div class="page__header" ng-click="page.showNav()">
            <span class="page__nav-toggle">Menu</span>
        </div>
        <nav class="page__navigation page-nav"
            ng-class="{
                'page__navigation--shown': page.isNavDisplayed
            }"
        >
            <button class="page-nav__hide-btn"
                type="button"
                ng-click="page.hideNav()"
            >Hide</button>
            <ul class="page-nav__items">
                <li class="page-nav__item">
                    <a class="page-nav__link" href="#!/view1">view1</a>
                </li>
                <li class="page-nav__item">
                    <a class="page-nav__link" href="#!/view2">view2</a>
                </li>
            </ul>
        </nav>
        <div class="page__content">
            <div ng-view></div>
        </div>
    </div>
    `
});
