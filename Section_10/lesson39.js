$(function() {
    // section 10.13
    // popup image using jQuery

    // resize all images to 50x50 pixels
    $('img').css({width: '50px', height: '50px'});

    $('.highlight').mouseleave(function() {
        $(this).height('40px');
        $(this).css('background-color', 'white');
    }).mouseenter(function() {
        $(this).height('200px');
        $(this).css('background-color', 'red');
    })

    // hides the children of the clicked div
    $('#wrapper > div').click(function() {
        $(this).children().toggle();
    })

    // shows the children of the div with an ID of wrapper
    $('h1').click(function() {
        $('#wrapper > div').children().toggle();
    })
})