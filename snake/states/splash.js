
$(document).ready(function(){
    $('body').prepend('<div id="splash" style="float: left;"></div>');
    $('#splash').append('<h1>Snake 3000</h1>');
    $('#splash').append('<div id="logo"></div>');
    $('#splash').append('<div id="menu"></div>');
    $('#logo').append('<img src="assets/images/logo.png" />');
    $('#menu').append('<a href="#" id="btn_play">Play</a>');

    $('#btn_play').click(function() {
        $('#splash').fadeOut();
    });
});



