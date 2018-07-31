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

    $("#popular-product-3").mouseover(function () {
        $("#popular-product-3").attr("src", "images/home/popular-products/product-3/alternate-image.png");
    });
    $("#popular-product-3").mouseout(function () {
        $("#popular-product-3").attr("src", "images/home/popular-products/product-3/main-image.png");
    });

    $("#popular-product-4").mouseover(function () {
        $("#popular-product-4").attr("src", "images/home/popular-products/product-4/alternate-image.png");
    });
    $("#popular-product-4").mouseout(function () {
        $("#popular-product-4").attr("src", "images/home/popular-products/product-4/main-image.png");
    }); 
});


// INSTAGRAM

$(".instagram-slider-for--desktop").slick({
    arrows: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    vertical: false
});
