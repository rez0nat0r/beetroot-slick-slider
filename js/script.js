$(document).ready(function() {
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:3,
        // slidesToScroll:3,
        speed:1000,
        easing:'_linear_',
        // infinite:true,
        autoplay:true,
        autoplaySpeed:1500,
        // pauseOnFocus:true,
        // pauseOnHover:true,
        // pauseOnDotsHover:true,
        draggable:true,
        swipe:true,
        touchThreshold:10,
        touchMove:true,
        waitForAnimate:false,
        centerMode:true,
        
    });
});