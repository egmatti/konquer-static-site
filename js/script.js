// GETTING STARTED EXAMPLE
// $(document).ready(function(){
//   // jQuery code
// });

// HEADER

$(document).ready(function(){
    $(function () {
        $("header").addClass("header--default");
        $(".main-nav--left li").addClass("nav-items--default");
        $(".main-nav--right li").addClass("nav-items--default");

        $(window).on("scroll", function () {

            if ($(window).scrollTop() < 50 && $('.main-nav li').mouseout()) {
                $("header").addClass("header--default");
                $(".main-nav--left li").addClass("nav-items--default");
                $(".main-nav--right li").addClass("nav-items--default");
                $("header").removeClass("header--scrolled");
                $(".main-nav--left li").removeClass("nav-items--scrolled");
                $(".main-nav--right li").removeClass("nav-items--scrolled");
                $(".main-nav--left li").css({ color: "#FFFFFF" });
                $(".main-nav--right li").css({ color: "#FFFFFF" });
                console.log("default");
            } else if ($(window).scrollTop() < 50 && $(".main-nav--left li").mouseover()) {
                $("header").addClass("header--default");
                $(".main-nav--left li").addClass("nav-items--default");
                $(".main-nav--right li").addClass("nav-items--default");
                $("header").removeClass("header--scrolled");
                $(".main-nav--left li").removeClass("nav-items--scrolled");
                $(".main-nav--right li").removeClass("nav-items--scrolled");
                $(".main-nav--left li").css({ color: "#BFBFBF" });
                $(this).css({ color: "#FFFFFF" });
                console.log("default--left");
            } else if ($(window).scrollTop() < 50 && $(".main-nav--right li").mouseover()) {
                $("header").addClass("header--default");
                $(".main-nav--left li").addClass("nav-items--default");
                $(".main-nav--right li").addClass("nav-items--default");
                $("header").removeClass("header--scrolled");
                $(".main-nav--left li").removeClass("nav-items--scrolled");
                $(".main-nav--right li").removeClass("nav-items--scrolled");
                $(".main-nav--right li").css({ color: "#BFBFBF" });
                $(this).css({ color: "#FFFFFF" });
                console.log("default--right");
            } else if ($(window).scrollTop() > 50 && $('.main-nav li').mouseout()) {
                $("header").addClass("header--scrolled");
                $(".main-nav--left li").addClass("nav-items--scrolled");
                $(".main-nav--right li").addClass("nav-items--scrolled");
                $("header").removeClass("header--default");
                $(".main-nav--left li").removeClass("nav-items--default");
                $(".main-nav--right li").removeClass("nav-items--default");
                $(".main-nav--left li").css({ color: "#222222" });
                $(".main-nav--right li").css({ color: "#222222" });
                console.log("scrolled");
            } else if ($(window).scrollTop() > 50 && $(".main-nav--left li").mouseover()) {
                $("header").addClass("header--scrolled");
                $(".main-nav--left li").addClass("nav-items--scrolled");
                $(".main-nav--right li").addClass("nav-items--scrolled");
                $("header").removeClass("header--default");
                $(".main-nav--left li").removeClass("nav-items--default");
                $(".main-nav--right li").removeClass("nav-items--default");
                $(".main-nav--left li").css({ color: "#BFBFBF" });
                $(this).css({ color: "#222222" });
                console.log("scrolled--left");
            } else if ($(window).scrollTop() > 50 && $(".main-nav--right li").mouseover()) {
                $("header").addClass("header--scrolled");
                $(".main-nav--left li").addClass("nav-items--scrolled");
                $(".main-nav--right li").addClass("nav-items--scrolled");
                $("header").removeClass("header--default");
                $(".main-nav--left li").removeClass("nav-items--default");
                $(".main-nav--right li").removeClass("nav-items--default");
                $(".main-nav--right li").css({color: "#BFBFBF"});
                $(this).css({ color: "#222222" });
                console.log("scrolled--right");
            }
        });
    });
});


// MEDIA QUERIES

const mediaQuerySmall = window.matchMedia( "(max-width: 767px)" );
const mediaQueryMedium = window.matchMedia( "(max-width: 1025px)" );
