'use strict';


$(function() {
    $('#panel1').hide(3000).show(2000);
    $('#panel2').fadeTo(1000, 0).fadeTo(2000, 0.8);
    $('#panel3').slideUp(1000).delay(1000).slideDown(1500);
    $('#panel4').fadeTo(1000, 0.3).slideUp(2000).fadeTo(2000, 0.1).slideDown(2000).fadeTo(2000, 1);
});