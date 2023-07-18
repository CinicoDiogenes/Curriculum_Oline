$(function () {

    $('article .contenido').hide();
    $('article h2').on('click', function () {
        if ($(this).next().is(':hidden')) {
            $('article .contenido:visible').slideUp();
            $('article .contenido:visible').prev().children().removeClass('fa-solid fa-circle-minus').addClass('fa-solid fa-circle-plus ');
            $(this).next().slideDown();
            $(this).children().removeClass('fa-solid fa-circle-plus').addClass('fa-solid fa-circle-minus');
            if ($(this).on('click', function () {
                $(this).removeClass('fa-solid fa-circle-minus').addClass('fa-solid fa-circle-plus');
            })) { // Still working

            } else {
              

            }

        } else {
            $(this).next().slideUp();
            $(this).children().removeClass('fa-solid fa-circle-plus').addClass('fa-solid fa-circle-minus');
        }
    });  



});

