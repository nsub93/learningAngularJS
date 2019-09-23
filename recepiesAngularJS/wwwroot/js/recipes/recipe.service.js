(function () {
    'use strict';

    class RecipeService {
        selectedRecipe;
        constructor(ShoppingListService) {
            this.shoppingListService = ShoppingListService;
            this.recipes = [
                new Recipe("test", "test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMi4CRetqw_yY1c_8q0fB3ceGkQJPH2MPHsWRpVUgrmc4Mox5a4w", [new Ingredient('Meat', 2), new Ingredient('French Fires', 10)]),
                new Recipe("test2", "test2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMi4CRetqw_yY1c_8q0fB3ceGkQJPH2MPHsWRpVUgrmc4Mox5a4w", [new Ingredient('Meat', 1), new Ingredient('Buns', 2)])
            ];
        }
        getRecipes() {
            return this.recipes.slice();
        }
        getRecipe(id) {
            return this.recipes[id];
        }
        addIngredientsToShoppingList(ingredients) {
            this.shoppingListService.addIngredients(ingredients);
        }
    }
    angular.module("app").service("RecipeService", RecipeService);
})();