$(function() {
    // section 11.4
    // jQuery Animate Even More

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
            'left': '+=50px'
        }, 'slow');
    });

    $('.btn').eq(1).click(function() {
        $('#output1').animate({
            'left': '-=50px',
            opacity: 'toggle'
        }, 'slow', 
        function() {
            $('#output2').css('background-color', 'red');
        });
    });

    $('.btn').last().click(function() {
        $('#output2').animate({
            height: 'toggle'
        }, 'slow');
    });

})