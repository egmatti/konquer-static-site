// GETTING STARTED EXAMPLE
// $(document).ready(function(){
//   // jQuery code
// });

// HEADER

$(document).ready(function(){

    if ($("body").not("#home-page")) {

        $(function () {
            $("header").addClass("header--default");
            $(".logo").addClass("logo--default");
            $(".main-nav--left").addClass("main-nav--left--default");
            $(".main-nav--left li").addClass("nav-items--default");
            $(".main-nav--right li").addClass("nav-items--default");
            $(".logo").attr("src", "images/main-nav/logo-black.png");
            $(".search").attr("src", "images/main-nav/search-black.svg");
            $(".bag").attr("src", "images/main-nav/bag-black.svg");

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
                    $(".search").css(("transform", "translateY(3px)"));
                    $(".bag").css(("transform", "translateY(7.5px)"));

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
                    $(".search").css("transform", "translateY(5px)");
                    $(".bag").css(("transform", "translateY(-7.5px)"));
                }
            });
        });
    }
});


// MEDIA QUERIES

const mediaQuerySmall = window.matchMedia( "(max-width: 767px)" );
const mediaQueryMedium = window.matchMedia( "(max-width: 1025px)" );
