$(document).ready(function() {
    // Анимация меню.
    $('.sub > a').on('click',function() {
        $('.sub ul').slideUp();
        if ($(this).next().is(":visible")) {
            $(this).next().slideUp();
        } else {
            $(this).next().slideToggle();
        }
        return false;
    });

    $('.mini-menu > ul > li > a').on('click',function() {
        $('.mini-menu > ul > li > a, .sub a').removeClass('active');
        $(this).addClass('active');
    });  
});
    