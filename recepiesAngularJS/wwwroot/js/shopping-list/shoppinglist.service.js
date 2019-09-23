(function () {
    'use strict';

    class ShoppingListService {
        constructor($rootScope) {
            this.$rootScope = $rootScope;
            this.ingredients = [
                new Ingredient("Apples", 5),
                new Ingredient("Tomatoes", 10)
            ];
        }
        getIngredients() {
            return this.ingredients.slice();
        }
        addIngredient(ingredient) {
            this.ingredients.push(ingredient);
            this.$rootScope.$broadcast('ingredientsChanged', this.ingredients.slice());
        }
        addIngredients(ingredients) {
            this.ingredients.push(...ingredients);
            this.$rootScope.$broadcast('ingredientsChanged', this.ingredients.slice());
        }
    }
    angular.module("app").service("ShoppingListService", ShoppingListService);
})();