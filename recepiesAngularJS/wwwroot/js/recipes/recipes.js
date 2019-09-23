(function () {
    "use strict";
    const recipes = {
        templateUrl: "js/recipes/recipes.html",
        controller: class RecipesComponent {
            //constructor($scope) {
            //    this.$scope = $scope;
            //    this.$scope.$on('recipeSelected', (event, recipe) => {
            //        this.recipeSelected = recipe;
            //        this.$scope.$broadcast('showSelectedRecipe', recipe);
            //    });
            //}
        },
        $routeConfig: [
            { path: '/', name: 'RecipeStart', component: 'recipeStart', useAsDefault: true },
            { path: '/:id', name: 'RecipesDetail', component: 'recipesDetail' },
            { path: '/new', name: 'RecipesNew', component: 'recipesEdit' },
            { path: '/:id/edit', name: 'RecipesEdit', component: 'recipesEdit' }
        ]
    };

    angular.module("app").component("recipeStart", {
        template: '<h3>Please select a Recipe!</h3>'    
    });

    angular.module("app").component("recipes", recipes);
})();