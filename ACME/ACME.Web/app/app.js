/**
 * Created by Deb on 8/20/2014.
 */
(function () { //use IIFE to prevent global declarations.
    "use strict"; //enable strict mode to catch common errors e.g.using undeclared variables.
    var app = angular.module("productManagement",
                               ["common.services", "productResourceMock"]);
}());