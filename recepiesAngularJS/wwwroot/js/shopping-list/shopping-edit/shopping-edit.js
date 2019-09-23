(function () {
    "use strict";
    const shoppingEdit = {
        templateUrl: "js/shopping-list/shopping-edit/shopping-edit.html",
        controller: class ShoppingEditComponent {
            name = "";
            amount;
            constructor(ShoppingListService) {
                this.shoppingListService = ShoppingListService;
            }
            onAddItem() {
                const ingredient = new Ingredient(this.name, this.amount);
                console.log(ingredient);
                this.shoppingListService.addIngredient(ingredient);
            }
        }
    };
    angular.module("app").component("shoppingEdit", shoppingEdit);
})();