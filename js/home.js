// ==========================================
// HOME PAGE
// ==========================================

// HEADER

$(document).ready(function () {

    if ($("body").is("#home-page")) {
        
        $(function () {
            $("header").addClass("header--default--home");
            $(".logo").addClass("logo--default--home");
            $(".main-nav--left").addClass("main-nav--left--home");
            $(".main-nav--left li").addClass("nav-items--default--home");
            $(".main-nav--right li").addClass("nav-items--default--home");
            $(".logo").attr("src", "images/main-nav/logo-white.png");
            $(".search").attr("src", "images/main-nav/search-white.svg");
            $(".bag").attr("src", "images/main-nav/bag-white.svg");

            $(window).on("scroll", function() {
                if ($(window).scrollTop() < 50) {
                    $("header").addClass("header--default--home");
                    $(".logo").addClass("logo--default--home");
                    $(".main-nav--left").addClass("main-nav--left--home");
                    $(".main-nav--left li").addClass("nav-items--default--home");
                    $(".main-nav--right li").addClass("nav-items--default--home");
                    $("header").removeClass("header--scrolled");
                    $(".logo").removeClass("logo--scrolled");
                    $(".main-nav--left").removeClass("main-nav--left--default");
                    $(".main-nav--left li").removeClass("nav-items--scrolled");
                    $(".main-nav--right li").removeClass("nav-items--scrolled");
                    $(".logo").attr("src", "images/main-nav/logo-white.png");
                    $(".search").attr("src", "images/main-nav/search-white.svg");
                    $(".bag").attr("src", "images/main-nav/bag-white.svg");
                    $(".search").css(("transform", "translateY(3px)"));
                    $(".bag").css(("transform", "translateY(7.5px)"));
                } else if ($(window).scrollTop() > 50) {
                    $("header").addClass("header--scrolled");
                    $(".logo").addClass("logo--scrolled");
                    $(".main-nav--left").addClass("main-nav--left--default");
                    $(".main-nav--left li").addClass("nav-items--scrolled");
                    $(".main-nav--right li").addClass("nav-items--scrolled");
                    $("header").removeClass("header--default--home");
                    $(".logo").removeClass("logo--default--home");
                    $(".main-nav--left").removeClass("main-nav--left--home");
                    $(".main-nav--left li").removeClass("nav-items--default--home");
                    $(".main-nav--right li").removeClass("nav-items--default--home");
                    $(".logo").attr("src", "images/main-nav/wordmark-black.svg");
                    $(".search").attr("src", "images/main-nav/search-black.svg");
                    $(".bag").attr("src", "images/main-nav/bag-black.svg");
                    $(".search").css("transform", "translateY(5px)");
                    $(".bag").css(("transform", "translateY(-7.5px)"));
                }
            });
        });
    }
});


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
