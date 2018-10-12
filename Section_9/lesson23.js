$(function() {
    // Section 9.2 - keyboard events

    // handles a user choosing an option from the 'select' element
    $('.sel').change(function() {
        //$('.highlight').css('color', $(this).val());
        $('body').css('background-color', $(this).val());
    })

    var newText = '';

    // input field receives focus
    $('input').focus((function() {
        $(this).css('background-color', 'yellow');
    }))

    // input field loses focus
    // $('input').blur((function() {
    //     $(this).css('background-color', 'white');
    // }))
    // similar to blur
    $('input').focusout((function() {
        $(this).css('background-color', 'white');
    }))

    // input field receives a keypress
    $('input').keypress(function(e) {
        console.log(e.key);
        newText += e.key;
        $('.highlight').text(newText);
    })

    // triggers while a key is pressed
    $('input').keydown(function(e) {
        $(this).css('color', 'red');
    })

    // triggers when a key is released
    $('input').keyup(function(e) {
        $(this).css('color', 'green');
    })
})