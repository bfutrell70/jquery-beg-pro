$(function() {
    // section 11.3
    // jQuery animate effect

    // in order for the 'left' animate step to work the position has to be set
    // to relative or absolute
    $('#output1').css({position: 'relative'})
    //$('#output1').css({position: 'absolute'})

    $('.btn').css({
        border: '1px solid black',
        width: '150px',
        padding: '10px'
    });

    $('.btn').first().click(function() {
        $('#output1').animate({
            "padding": "20px",
            fontSize: "75px",
            opacity: '0.5',
            // relative - left/top apply to initial position of element
            // absolute: left/top apply to top-left of page
            left: '300px',
            top: '50px'
        }, 5000);
    });

    $('.btn').eq(1).click(function() {
        // stops animation
        $('#output1').stop();
    });

    $('.btn').last().click(function() {
        console.log('third');
    });

})