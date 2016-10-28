(function () { //use IIFE to prevent global declarations.
    "use strict"; //enable strict mode to catch common errors e.g.using undeclared variables.
    var app = angular.module("productManagement",
                               ["common.services",
                                   "ui.router",
                                   "productResourceMock"]);

    //app.config(
    //   function ($stateProvider) {
    //       $stateProvider
    //           //Products
    //       .state("ProductList", {
    //           url: "/products",
    //           templateUrl: "app/products/productListView.html",
    //           controller: "ProductListCtrl as vm"

    //       })
    //   })

    //Use the array syntax (min safe array) to preserve the variable names during minification. 
    // The same  could have been written with out the array syntax as noted above.
    app.config(["$stateProvider",
        "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {

            //Default route - used if 
            //1. There is no active state
            //2. The requested state is not defined in the state provider.
            $urlRouterProvider.otherwise("/");

            $stateProvider
                 //Home
            .state("home", {
                url: "/",
                templateUrl: "app/welcomeView.html" 
               //controller is optional.

            })   

                //Products
            .state("productList", {
                url: "/products",
                templateUrl: "app/products/productListView.html", 
                controller: "ProductListCtrl as vm"

            })

             .state("productEdit", {
                 url: "/products/edit/:productId", //named parameter for passing the product id.
                 templateUrl: "app/products/productEditView.html",
                 controller: "ProductEditCtrl as vm"

             })
        }])
}());