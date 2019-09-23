(function () {
    "use strict";
    const recipesItem = {
        templateUrl: "js/recipes/recipes-list/recipes-item/recipes-item.html",
        bindings: {
            recipe: '<',
            index: '@'
        }
    };
    angular.module("app").component("recipesItem", recipesItem);
})();