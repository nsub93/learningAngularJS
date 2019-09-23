(function () {
    "use strict";
    const recipesDetail = {
        templateUrl: "js/recipes/recipes-detail/recipes-detail.html",
        controller: class RecipeDetailComponent {
            recipe = null;
            constructor($scope, RecipeService) {
                this.recipeService = RecipeService;
                //$scope.$watch(() => this.recipeService.selectedRecipe, (newVal) => {
                //    this.recipe = newVal;
                //});
                //this.$scope = $scope;
                //this.$scope.$on('showSelectedRecipe', (event, recipe) => {
                //    this.recipe = recipe;
                //});
            }

            onAddToShoppingList() {
                this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
            }

            $routerOnActivate(next) {
                let id = next.params.id;
                this.recipe = this.recipeService.getRecipe(id);
            }
        }
    };
    angular.module("app").component("recipesDetail", recipesDetail);
})();