//Так приятней :)
window.log = function(param){
    console.log(param);
};
$(document).ready(function(){
    // ПРОВЕРКА
    //$('.icon').bind('click',function(){
    //    alert('Все работает!!! :)')
    //})



/********************************
*         ANIMATION CSS
********************************/
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

$('.buttom').bind('mouseenter', function(){
    $(this).addClass('animated rubberBand').one(animationEnd, function(){
        $(this).removeClass('animated rubberBand');
    });


});
    $('.buttom').bind('click', function(){
        $('input[type="text"]').addClass('animated fadeOutRightBig').one(animationEnd, function(){
            $(this).removeClass('animated fadeOutRightBig').addClass('animated fadeInLeftBig').one(animationEnd, function(){
                $(this).removeClass('animated fadeInLeftBig');
            });
        });
    });


/********************************
*       \ANIMATION CSS\
********************************/




    /********************************
     *   Слайдер-Карусель Swiper
     ********************************/
    var sliderName = '.swiper';


    //initialize swiper when document ready
    var mySwiper = new Swiper (sliderName, {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 700,
        autoplay: 5000,
        followFinger:true,

        // If we need pagination
        pagination: '.swiper-pagin',
        paginationClickable: true,
        // Navigation arrows
        nextButton: '.swiper-next',
        prevButton: '.swiper-prev',

        mousewheelControl: true


    });

    // avto stop hover
    $(sliderName).bind('mouseenter', function(){
        mySwiper.stopAutoplay()
    });
    $(sliderName).bind('mouseleave', function(){
        mySwiper.startAutoplay()
    });




    // collbek для слайдера
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var animationNameOne = 'animated bounceInLeft';
    var animationNameTwo = 'animated bounceInRight';


    mySwiper.on('onSlidePrevStart', function () {
        $('.cal ,.text').css({"opacity": "0"});
        $('.cal,.text').css({'opacity': '1'}).addClass(animationNameOne).one(animationEnd, function () {
            $(this).removeClass(animationNameOne);
        });
    });

    mySwiper.on('onSlideNextStart', function () {
        $('.cal ,.text').css({"opacity": "0"});
        $('.cal,.text').css({'opacity': '1'}).addClass(animationNameTwo).one(animationEnd, function () {
            $(this).removeClass(animationNameTwo);
        });
    });





    var slider = new Swiper('.slider', {
        //slideClass: '.slider-container',
        //wrapperClass:'.slider-wrapper',
        direction: 'horizontal',
        loop: true,
        speed: 700,
        //slidesPerView: 3,
        //spaceBetween:20,

        breakpoints: {
            2024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        },

        // If we need pagination
        pagination: '.slider-pagination',
        paginationClickable: true,
        // Navigation arrows
        nextButton: '.slider-next',
        prevButton: '.slider-prev',

        mousewheelControl: true
    });

    /********************************
     *   \Слайдер-Карусель Swiper\
     ********************************/



});