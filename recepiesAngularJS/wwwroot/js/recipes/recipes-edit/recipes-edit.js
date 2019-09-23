(function () {
    "use strict";
    const recipesEdit = {
        templateUrl: "js/recipes/recipes-edit/recipes-edit.html",
        controller: class RecipeEditComponent {
            id;
            editMode = false;
            
            $routerOnActivate(next) {
                this.id = next.params.id;
                this.editMode = next.params.id !== null;
            }
        }
    };
    angular.module("app").component("recipesEdit", recipesEdit);
})();