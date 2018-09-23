// GETTING STARTED EXAMPLE
// $(document).ready(function(){
//   // jQuery code
// });

// HEADER

$(document).ready(function(){

    $(".nav-item--women").mouseenter(function () {
        $(".mega-menu").css("display", "block");
        $(".women-nav").css("display", "grid");
        $(".men-nav").css("display", "none");
        $(".accessories-nav").css("display", "none");
    });
    $(".nav-item--women").mouseleave(function () {
        if ($(".mega-menu").is(":hover") === true) {
            $(".mega-menu").css("display", "block");
            $(".women-nav").css("display", "grid");
        } else {
            $(".mega-menu").css("display", "none");
            $(".women-nav").css("display", "none");
        }
    });

    $(".nav-item--men").mouseenter(function () {
        $(".mega-menu").css("display", "block");
        $(".men-nav").css("display", "grid");
        $(".women-nav").css("display", "none");
        $(".accessories-nav").css("display", "none");
    });
    $(".nav-item--men").mouseleave(function () {
        if ($(".mega-menu").is(":hover") === true) {
            $(".mega-menu").css("display", "block");
            $(".men-nav").css("display", "grid");
        } else {
            $(".mega-menu").css("display", "none");
            $(".men-nav").css("display", "none");
        }
    });

    $(".nav-item--accessories").mouseenter(function () {
        $(".mega-menu").css("display", "block");
        $(".accessories-nav").css("display", "grid");
        $(".women-nav").css("display", "none");
        $(".men-nav").css("display", "none");
    });
    $(".nav-item--accessories").mouseleave(function () {
        if ($(".mega-menu").is(":hover") === true) {
            $(".mega-menu").css("display", "block");
            $(".accessories-nav").css("display", "grid");
        } else {
            $(".mega-menu").css("display", "none");
            $(".accessories-nav").css("display", "none");
        }
    });

    $(".mega-menu").mouseleave(function () {
        $(".mega-menu").css("display", "none");
        $(".women-nav").css("display", "none");
        $(".men-nav").css("display", "none");
        $(".accessories-nav").css("display", "none");
    });


    if ($("body").not("#home-page")) {

        $(".nav-item--women").mouseenter(function () {
            $(".nav-item--women").css("border-bottom", "4px solid #85BAA1");
            $(".nav-item--men, .nav-item--accessories").css("border-bottom", "4px solid rgba(256, 256, 256, 0)");
            $(".nav-item--women").css("color", "#424242");
            $(".nav-item--men, .nav-item--accessories").css("color", "rgba(34, 34, 34, 0.5)");
        });
        $(".nav-item--women").mouseleave(function () {
            if ($(".mega-menu").is(":hover") === true) {
                $(".nav-item--women").css("border-bottom", "4px solid #85BAA1");
                $(".nav-item--men, .nav-item--accessories").css("border-bottom", "4px solid rgba(256, 256, 256, 0)");
                $(".nav-item--women").css("color", "#424242");
                $(".nav-item--men, .nav-item--accessories").css("color", "rgba(34, 34, 34, 0.5)");
            } else {
                $(".nav-item--women, .nav-item--men, .nav-item--accessories").css("border-bottom", "4px solid rgba(256, 256, 256, 0)");
                $(".nav-item--women, .nav-item--men, .nav-item--accessories").css("color", "#424242");
            }
        });

        $(".nav-item--men").mouseenter(function () {
            $(".nav-item--men").css("border-bottom", "4px solid #85BAA1");
            $(".nav-item--women, .nav-item--accessories").css("border-bottom", "4px solid rgba(256, 256, 256, 0)");
            $(".nav-item--men").css("color", "#424242");
            $(".nav-item--women, .nav-item--accessories").css("color", "rgba(34, 34, 34, 0.5)");
        });
        $(".nav-item--men").mouseleave(function () {
            if ($(".mega-menu").is(":hover") === true) {
                $(".nav-item--men").css("border-bottom", "4px solid #85BAA1");
                $(".nav-item--women, .nav-item--accessories").css("border-bottom", "4px solid rgba(256, 256, 256, 0)");
                $(".nav-item--men").css("color", "#424242");
                $(".nav-item--women, .nav-item--accessories").css("color", "rgba(34, 34, 34, 0.5)");
            } else {
                $(".nav-item--women, .nav-item--men, .nav-item--accessories").css("border-bottom", "4px solid rgba(256, 256, 256, 0)");
                $(".nav-item--women, .nav-item--men, .nav-item--accessories").css("color", "#424242");
            }
        });

        $(".nav-item--accessories").mouseenter(function () {
            $(".nav-item--accessories").css("border-bottom", "4px solid #85BAA1");
            $(".nav-item--women, .nav-item--men").css("border-bottom", "4px solid rgba(256, 256, 256, 0)");
            $(".nav-item--accessories").css("color", "#424242");
            $(".nav-item--women, .nav-item--men").css("color", "rgba(34, 34, 34, 0.5)");
        });
        $(".nav-item--accessories").mouseleave(function () {
            if ($(".mega-menu").is(":hover") === true) {
                $(".nav-item--accessories").css("border-bottom", "4px solid #85BAA1");
                $(".nav-item--women, .nav-item--men").css("border-bottom", "4px solid rgba(256, 256, 256, 0)");
                $(".nav-item--accessories").css("color", "#424242");
                $(".nav-item--women, .nav-item--men").css("color", "rgba(34, 34, 34, 0.5)");
            } else {
                $(".nav-item--women, .nav-item--men, .nav-item--accessories").css("border-bottom", "4px solid rgba(256, 256, 256, 0)");
                $(".nav-item--women, .nav-item--men, .nav-item--accessories").css("color", "#424242");
            }
        });

        $(".mega-menu").mouseleave(function () {
            $(".nav-item--women, .nav-item--men, .nav-item--accessories").css("border-bottom", "4px solid rgba(256, 256, 256, 0)");
            $(".nav-item--women, .nav-item--men, .nav-item--accessories").css("color", "#424242");
        });


        $(function () {

            if ($(window).scrollTop() < 50) {
                $("header").addClass("header--default");
                $(".logo").addClass("logo--default");
                $(".main-nav--left").addClass("main-nav--left--default");
                $(".main-nav--left li").addClass("nav-items--default");
                $(".main-nav--right li").addClass("nav-items--default");
                $(".logo").attr("src", "images/main-nav/logo-black.png");
                $(".search").attr("src", "images/main-nav/search-black.svg");
                $(".bag").attr("src", "images/main-nav/bag-black.svg");
            } else if ($(window).scrollTop() > 50) {
                $("header").addClass("header--scrolled");
                $(".logo").addClass("logo--scrolled");
                $(".main-nav--left li").addClass("nav-items--scrolled");
                $(".main-nav--right li").addClass("nav-items--scrolled");
                $("header").removeClass("header--default");
                $(".logo").removeClass("logo--default");
                $(".main-nav--left li").removeClass("nav-items--default");
                $(".main-nav--right li").removeClass("nav-items--default");
                $(".logo").attr("src", "images/main-nav/wordmark-black.svg");
                $(".search").attr("src", "images/main-nav/search-black.svg");
                $(".bag").attr("src", "images/main-nav/bag-black.svg");
                $(".search").css("transform", "translateY(5px)");
            }

            $(window).on("scroll", function () {

                if ($(window).scrollTop() < 50) {
                    $("header").addClass("header--default");
                    $(".logo").addClass("logo--default");
                    $(".main-nav--left li").addClass("nav-items--default");
                    $(".main-nav--right li").addClass("nav-items--default");
                    $("header").removeClass("header--scrolled");
                    $(".logo").removeClass("logo--scrolled");
                    $(".main-nav--left li").removeClass("nav-items--scrolled");
                    $(".main-nav--right li").removeClass("nav-items--scrolled");
                    $(".logo").attr("src", "images/main-nav/logo-black.png");
                    $(".search").css("transform", "translateY(3px)");
                    $(".bag").css("transform", "translateY(7.5px)");

                } else if ($(window).scrollTop() > 50) {
                    $("header").addClass("header--scrolled");
                    $(".logo").addClass("logo--scrolled");
                    $(".main-nav--left li").addClass("nav-items--scrolled");
                    $(".main-nav--right li").addClass("nav-items--scrolled");
                    $("header").removeClass("header--default");
                    $(".logo").removeClass("logo--default");
                    $(".main-nav--left li").removeClass("nav-items--default");
                    $(".main-nav--right li").removeClass("nav-items--default");
                    $(".logo").attr("src", "images/main-nav/wordmark-black.svg");
                    $(".search").attr("src", "images/main-nav/search-black.svg");
                    $(".bag").attr("src", "images/main-nav/bag-black.svg");
                    $(".search").css("transform", "translateY(5px)");
                }
            });
        });
    }
});


// MEDIA QUERIES

const mediaQuerySmall = window.matchMedia( "(max-width: 767px)" );
const mediaQueryMedium = window.matchMedia( "(max-width: 1025px)" );
