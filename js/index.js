'use strict';
// Go TOP
$(function() {
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.go-top').addClass('expand');
            $('.page-header-alpha').addClass('scroll')
        } else {
            $('.go-top').removeClass('expand');
            $('.page-header-alpha').removeClass('scroll')
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })


});

function c(l) {
    console.log(l);
}
var $this = $(this);
$("html").easeScroll();

/*=========================================================================
   Document
=========================================================================*/

$(document).ready(function() {
    /*=========================================================================
      CODE
     =========================================================================*/
    $(".your-class").slick({
        infinite: false,
        cssEase: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        speed: 900,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "20%",
        slidesToShow: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "10%",
                speed: 200
            }
        }]
    });

    $('.slider').slick({
        infinite: false,
        cssEase: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        speed: 900,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: false,
        nextArrow: false
    });
    $('.text').slick({
        infinite: false,

        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: false,
        nextArrow: false
    });


    /*=========================================================================
     CODE
     =========================================================================*/
})

jQuery(function($) {
    $.fn.hScroll = function(amount) {
        amount = amount || 120;
        $(this).bind("DOMMouseScroll mousewheel", function(event) {
            var oEvent = event.originalEvent,
                direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
                position = $(this).scrollLeft();
            position += direction > 0 ? -amount : amount;
            $(this).scrollLeft(position);
            event.preventDefault();
        })
    };
});

$(document).ready(function() {
    $('#box').hScroll(60); // You can pass (optionally) scrolling amount
});