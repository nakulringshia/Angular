(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductEditCtrl",
        ["productDep",
            ProductEditCtrl]);


    function ProductEditCtrl(productDep) {
        var vm = this;

        vm.product = productDep;

        if (vm.product && vm.product.productId) {
            vm.title = "Edit: " + vm.product.productName;
        }
        else {
            vm.title = "New Product"
        }
    }
}());