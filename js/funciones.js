$(function(){

    $('#btnMenuMovil').on('click', function(){
        $('nav#menu-principal > ul').toggleClass('abierto');
        
    });

    $('[data-fancybox]').fancybox({
        loop:true
    });

    $('#validar').validate();

    $('#hab dt').append('<br>');

    $('#fig1 a').on('mouseover').append('<figcaption>Creando modulos con Phython</figcaption>');
    $('#fig2 a').on('mouseover').append('<figcaption>Operador primo en Python</figcaption>');
    $('#fig3 a').on('mouseover').append('<figcaption>Reproduzindo música Def Phyton</figcaption>');
    $('#fig4 a').on('mouseover').append('<figcaption>Bottones interactivo en JQuery</figcaption>');
    $('#fig5 a').on('mouseover').append('<figcaption>Mtg free classes land page (BootsTrap)</figcaption>');
    $('#fig6 a').on('mouseover').append('<figcaption>Web page receta Calçots y salsa romesco       (HTML y CSS)</figcaption>');

    

  

}); // document ready

