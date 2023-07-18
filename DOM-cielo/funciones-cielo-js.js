$ (function(){
    $('#botones > button').on('click', function(){
        let avion = $(this).data('idavion');
        if ($('#' + avion).css('animation-play-state') == 'paused') {
            $('#' + avion).css('animation-play-state', 'running');

        } else{
         $('#' + avion).css('animation-play-state', 'paused');
        }
        $(this).toggleClass('pausado')
    });
});