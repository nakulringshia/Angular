(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                     ["productResource",ProductListCtrl]); //instead of defining the function inline, pass in a reference to the function.

    function ProductListCtrl(productResource) {
        var viewmodel = this;
        
        //This is using a $resource. Alternatively could have used $http.
        productResource.query(function (data) {
            viewmodel.products = data

        });

        viewmodel.showImage = false;

        viewmodel.toggleImage = function () {
            viewmodel.showImage = !viewmodel.showImage;

        }
    }

}());