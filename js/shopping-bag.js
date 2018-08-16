// ==========================================
// SHOPPING BAG PAGE
// ==========================================

// SIMILAR PRODUCTS

$(document).ready(function () {
    $("#similar-product-1").mouseover(function () {
        $("#similar-product-1").attr("src", "images/similar-products/product-1/alternate-image.png");
    });
    $("#similar-product-1").mouseout(function () {
        $("#similar-product-1").attr("src", "images/similar-products/product-1/main-image.png");
    });

    $("#similar-product-2").mouseover(function () {
        $("#similar-product-2").attr("src", "images/similar-products/product-2/alternate-image.png");
    });
    $("#similar-product-2").mouseout(function () {
        $("#similar-product-2").attr("src", "images/similar-products/product-2/main-image.png");
    });

    $("#similar-product-3").mouseover(function () {
        $("#similar-product-3").attr("src", "images/similar-products/product-3/alternate-image.png");
    });
    $("#similar-product-3").mouseout(function () {
        $("#similar-product-3").attr("src", "images/similar-products/product-3/main-image.png");
    });

    $("#similar-product-4").mouseover(function () {
        $("#similar-product-4").attr("src", "images/similar-products/product-4/alternate-image.png");
    });
    $("#similar-product-4").mouseout(function () {
        $("#similar-product-4").attr("src", "images/similar-products/product-4/main-image.png");
    });
});