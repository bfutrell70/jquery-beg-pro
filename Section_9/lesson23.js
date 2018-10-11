$(function() {
    // Section 9.2

    // input field receives focus
    $('input').focus((function() {
        $(this).css('background-color', 'yellow');
    }))

    // input field loses focus
    $('input').blur((function() {
        $(this).css('background-color', 'white');
    }))

    // input field receives a keypress
    $('input').keypress(function(e) {
        console.log(e.key);
    })


})