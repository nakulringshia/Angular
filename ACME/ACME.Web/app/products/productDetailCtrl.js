(function () {
    "use strict"

    angular
       .module("productManagement")
       .controller("ProductDetailCtrl",
                    ["productDep",
                        ProductDetailCtrl]);

    function ProductDetailCtrl(productDep) {
        var vm = this;

        vm.product = productDep;

        vm.title = "Product Detail: " + vm.product.productName;

        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }
    }
}())