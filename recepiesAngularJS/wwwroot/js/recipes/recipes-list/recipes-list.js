(function () {
    "use strict";
    
    const recipesList = {
        templateUrl: "js/recipes/recipes-list/recipes-list.html",
        controller: class RecipesListComponent {
            static get $inject() { return ['RecipeService']; }

            recipes = [];
            constructor(RecipeService) {
                //this.$scope = $scope;
                this.recipeService = RecipeService;
            }

            $onInit() {
                this.recipes = this.recipeService.getRecipes();
            }

            selectRecipe(recipe) {
                this.recipeService.selectedRecipe = recipe;
                //this.$scope.$emit('recipeSelected', recipe);
            }
        }
    };
    angular.module("app").component("recipesList", recipesList);
})();