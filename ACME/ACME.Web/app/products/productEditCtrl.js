(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductEditCtrl",
        ["productDep",
            "$state",
            ProductEditCtrl]);


    function ProductEditCtrl(productDep,$state) {
        var vm = this;

        vm.product = productDep;

        if (vm.product && vm.product.productId) {
            vm.title = "Edit: " + vm.product.productName;
        }
        else {
            vm.title = "New Product"
        }

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;

        }

        vm.submit = function () {
            //the resource service provides a $save method.
            vm.product.$save(function (data) {
                toastr.success("Save Successful"); //toaster notifications
            }
           );
        }

        vm.cancel = function () {
            $state.go('productList'); //Navigate to the productList state.
        }

        vm.addTags = function (tags) {
            if (tags) {
                var array = tags.split(',');
                vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
                vm.newTags = "";
            } else {
                alert("Please enter one or more tags separated by commas");
            }
        }

        vm.removeTag = function (idx) {
            vm.product.tags.splice(idx, 1);
        }
    }
}());