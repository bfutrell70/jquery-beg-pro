$(function() {
    // section 10.13
    // popup image using jQuery

    // resize all images to 50x50 pixels
    $('img').css({width: '50px', height: '50px'});

    $('img').click(function() {
        // get the image source from the img element
        var tempSrc = $(this).attr('src');

        // get the text from the first two
        // input textboxes to set the popup image to
        var tempText = $('#input1').val() +
                        " " +  $('#input2').val();

        // opens a new window with the full-sized image
        window.open(tempSrc+"?text=" + tempText, 'Full Image', 'Window popup');
    }).mouseleave(function() {
        $(this).css('border', '1px solid red');
    })
})