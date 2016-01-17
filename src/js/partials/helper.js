//Так приятней :)
window.log = function(param){
    console.log(param);
};
$(document).ready(function(){
    // ПРОВЕРКА
    //$('.icon').bind('click',function(){
    //    alert('Все работает!!! :)')
    //})



    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 600,

        // If we need pagination
        pagination: '.swiper-pagination',

        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',


    });

    mySwiper.on('onSlideChangeStart', function () {
        //alert('Вперед!!!');
        //$('.cal').addClass('animated bounceOutLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        //    $(this).removeClass('animated bounceOutLeft');
        //});
    });
    mySwiper.on('onSlideChangeEnd', function () {
        //alert('Вперед Вперед!!!');
        $('.cal').addClass('animated swing').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated swing');
        });
    });



    //var activs = $('.swiper-slide-active');
    //var nexts = $('.swiper-slide-next');
    //var prevs = $('.swiper-slide-prev');
    //var span = $('.cal');
    //
    //
    //$('.swiper-slide-active .cal').addClass('animated rubberBand');



    $('.buttom').bind('mouseenter', function(){
        $(this).addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated rubberBand');
        });


    });
    $('.buttom').bind('click', function(){
        $('input[type="text"]').addClass('animated fadeOutRightBig').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated fadeOutRightBig').addClass('animated fadeInLeftBig').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass('animated fadeInLeftBig');
            });
        });
    });

});