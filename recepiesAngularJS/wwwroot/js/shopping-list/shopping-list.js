(function () {
    "use strict";
    const shoppingList = {
        templateUrl: "js/shopping-list/shopping-list.html",
        controller: class ShoppingListComponent {
            ingredients = [];
            constructor($rootScope, ShoppingListService) {
                this.$rootScope = $rootScope;
                this.shoppingListService = ShoppingListService;
                this.$rootScope.$on('ingredientsChanged', (event, ingredients) => {
                    this.ingredients = ingredients;
                });
            }
            $onInit() {
                this.ingredients = this.shoppingListService.getIngredients();
            }
            $routerOnActivate(next, previous) {
                //console.log(next);
                //console.log(previous);
            }
        }
    };
    angular.module("app").component("shoppingList", shoppingList);
})();