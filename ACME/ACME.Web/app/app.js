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
                 //Abstract state - not be activitated explicity. Instead it automatically activated when a child state
                 // is activated.
                 abstract: true,
                 url: "/products/edit/:productId", //named parameter for passing the product id.
                 templateUrl: "app/products/productEditView.html",
                 controller: "ProductEditCtrl as vm",
                 resolve: {
                     //Dependency on the productResource service added with key of productResourceDep
                     // The code works even with this commented. I guess the productResource is automatically
                     // resolved when its used in the function defined for the productDep dependency. 
                     // So need to explicity resolve the product resolve service.
                     //productResourceDep: "productResource", 

                     productDep: function (productResource, $stateParams) {
                         var productId = $stateParams.productId;
                         //Use the get method on the product resource service.
                         return productResource.get({ productId: productId }).$promise;
                     }
                 }
             })

                //Nested states 
            .state("productEdit.info", {
                url: "/info",
                templateUrl: "app/products/productEditInfoView.html"
            })

             .state("productEdit.price", {
                 url: "/price",
                 templateUrl: "app/products/productEditPriceView.html"
             })
                .state("productEdit.tags", {
                    url: "/tags",
                    templateUrl: "app/products/productEditTagsView.html"
                })


             .state("productDetail", {
                 url: "/products/:productId", //named parameter for passing the product id.
                 templateUrl: "app/products/productDetailView.html",
                 controller: "ProductDetailCtrl as vm",
                 resolve: {
                     //Dependency on the productResource service added with key of productResourceDep
                     // The code works even with this commented. I guess the productResource is automatically
                     // resolved when its used in the function defined for the productDep dependency. 
                     // So need to explicity resolve the product resolve service.
                     //productResourceDep: "productResource", 

                     productDep: function (productResource, $stateParams) {
                         var productId = $stateParams.productId;
                         //Use the get method on the product resource service.
                         return productResource.get({ productId: productId }).$promise;
                     }
                 }

             })
        }])
}());