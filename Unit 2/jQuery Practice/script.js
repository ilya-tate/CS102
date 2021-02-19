'use strict';


$(function() {
    // setInterval(panelAnim, 0);
    // function panelAnim(){
    //     $('#panel1').hide(3000).show(2000);
    //     $('#panel2').fadeTo(1000, 0).fadeTo(2000, 0.8);
    //     $('#panel3').slideUp(1000).delay(1000).slideDown(1500);
    //     $('#panel4').fadeTo(1000, 0.3).slideUp(2000).fadeTo(2000, 0.1).slideDown;(2000).fadeTo(2000, 1);
    // }



    // $('#panel1').css({
    //     'color': 'blue',
    //     'font-weight': 'bolder',
    //     'background-color': 'red'
    // })

    // $('#panel1').html("new Text");



    // $('#panel1').css({
    //     'background-color': 'blue',
    //     'color': 'white'
    // });

    // $('#panel1-body').html("The text background is blue and the text is white.");


    // $('#panel2').css({
    //     'background-color': 'green',
    //     'color': 'white',
    //     'font-weight': 'bold'
    // });

    // $('#panel2-body').html("The background is green and the tex tis white and the font is bold.");


    // $('#panel3').css({
    //     'background-color': 'darkgrey',
    //     'color': 'black',
    //     'font-family': 'monospace'
    // });
    // $('#panel3-body').css({
    //     'font-family': 'monospace'
    // });

    // $('#panel3-body').html("The background is darkgrey and the tex tis black and the font family is monospace, including the panel content.");


    // $('#panel4').css({
    //     'background-color': 'white',
    //     'color': 'black'
    // });
    // $('#panel4-heading').css({
    //     'background-color': 'blue',
    //     'color': 'white',
    //     'text-decoration': 'underline',
    //     'font-weight': 'bold'
    // });
    // $('#panel4-body').css({
    //     'background-color': 'red',
    //     'color': 'white',
    //     'font-family': 'serif'
    // });

    // $('#panel4-body').html("The panel is white with black text, the heading is blue white white text, and underlined with bold text, the content is red with whtie text and serif font.");


    // $('#button1').on('click', function(){
    //     $('#panel1').fadeToggle(1000);
    // });

    //     function rng(min, max) {
    //     return Math.floor(Math.random() * max) + min;
    // }

    // $('#button2').on('click', function(){
    //     let showDelay = rng(1000, 6000); // I made an rng function
    //     $('#panel2').hide(10).delay(showDelay).show(10);
    //     $('#panel2-heading').html(showDelay + " milliseconds");
    // });

    // $('#button3').on('mouseover', function(){
    //     $('#panel3').fadeOut(1000);
    //     $('#panel4').fadeOut(1000);
    // });

    // $('#button4').on('mouseover', function(){
    //     $('#panel3').fadeIn(1000);
    //     $('#panel4').fadeIn(1000);
    // });



    // $('#button1').on('click', function(){
    //     $('#panel1').toggle();
    //     $('#panel4').toggle();
    // });

    // $('#button2').on('click', function(){
    //     $('#panel2').toggle();
    //     $('#panel3').toggle();
    //     $('#panel4').toggle();
    // });

    // $('#button3').on('click', function(){
    //     $('#panel1').toggle();
    //     $('#panel3').toggle();
    // });

    // $('#button4').on('click', function(){
    //     $('#panel1').toggle();
    //     $('#panel2').toggle();
    // });




    // $('button').on('click', function(){
    //     let panelId = $(this).attr('panelid');
    //     $('#panel' + panelId).toggle(1000);
    //     $('#panel' + panelId + '.panel-heading').html("This changed")
    // });



    // $('button').hide();
    // $('.panel').hide();
    // $('#button1').show();
    // $('#button1').html();

    // $('button').on('click', function(){
    //     let panelid = $(this).attr('panelid');
    //     $('#panel' + panelid).toggle();
    //     $('#panel' + panelid + '.panel-body').html("This changed")
    // });

    // $('.panel').on('click', function(){
    //     let panelid = $(this).attr('panelid');
    //     let panelid = +(panelid) + 1;
    //     $('#button' + panelid).toggle();
    //     $('#button' + panelid).html("This changed")
    // });



    // $('li').on('click', function(){
    //     $(this).next().toggle(300);
    // });



    $('li').on('click', function(){
        $(this).closest('.list').find('li').filter('.highlight').removeClass('highlight');
        $(this).addClass('highlight');
    });
});


