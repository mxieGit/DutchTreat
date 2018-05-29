﻿$(document).ready(function () { 

    console.log("Hello Pluralsight!");

    var theForm = $("#theForm");
    theForm.hide();

    var buyButton = $("#buyButton");

    buyButton.on("click", function () {
        console.log("Buying item");
    });

    var productInfo = $(".product-info li");
    productInfo.on("click", function () {
        console.log("You clicked on " + $(this).text());
    });

    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    $loginToggle.on("click", function () {
        $popupForm.fadeToggle(1000);
    });

});