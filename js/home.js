// ==========================================
// HOME PAGE
// ==========================================

// POPULAR PRODUCTS

$(document).ready(function(){
    $("#popular-product-1").mouseover(function () {
        $("#popular-product-1").attr("src", "images/home/popular-products/product-1/alternate-image.png");
    });
    $("#popular-product-1").mouseout(function() {
      $("#popular-product-1").attr("src", "images/home/popular-products/product-1/main-image.png");
    });

    $("#popular-product-2").mouseover(function () {
        $("#popular-product-2").attr("src", "images/home/popular-products/product-2/alternate-image.png");
    });
    $("#popular-product-2").mouseout(function () {
        $("#popular-product-2").attr("src", "images/home/popular-products/product-2/main-image.png");
    });

    
});