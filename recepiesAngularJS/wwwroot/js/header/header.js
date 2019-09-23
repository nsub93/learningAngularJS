(function () {
    "use strict";
    const appHeader = {
        templateUrl: "js/header/header.html",
        controller: class HeaderComponent {
            constructor($scope) {
                this.$scope = $scope;
            }
            onSelect(feature) {
                this.$scope.$emit('featureSelected', feature);  
            }
        }
    };
    angular.module("app").component("appHeader", appHeader);
})();