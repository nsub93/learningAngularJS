angular.module("app", ['ngComponentRouter']);

angular.module("app").config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
}).value('$routerRootComponent', 'appRoot');

(function () {
    "use strict";
    const appRoot = {
        templateUrl: "js/appRoot.html",
        $routeConfig: [
            { path: '/recipes/...', name: 'Recipes', component: 'recipes', useAsDefault: true },
            { path: '/shopping-list', name: 'ShoppingList', component: 'shoppingList' }
        ]
        //controller: class AppComponent {
        //    constructor() {
                
        //        this.loadedFeature = "recipe";

        //        this.$scope = $scope;
        //        this.$scope.$on('featureSelected', (event, feature) => {
        //            this.onNavigate(feature);
        //        });
        //    }

        //    onNavigate(feature) {
        //        this.loadedFeature = feature;
        //    }
        //}
    };
    angular.module("app").component("appRoot", appRoot);
})();