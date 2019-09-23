(function () {
    'use strict';

    angular
        .module('app')
        .directive('appDropdown', dropdown);

    function dropdown() {
        const directive = {
            restrict: 'A',
            scope: {},
            controller: class DropDownDirective {
                constructor($element) {
                    this.$element = $element;
                    this.isOpen = false;

                    //@HostListener('click') onClick() 
                    this.$element.on("click", () => {
                        this.isOpen = !this.isOpen;
                        //@HostBinding('class.open') isOpen;
                        if (this.isOpen)
                            this.$element.addClass('open');
                        else
                            this.$element.removeClass('open');
                    });
                }
            }
        };
        return directive;

    }

})();