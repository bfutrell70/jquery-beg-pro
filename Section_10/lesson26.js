$(function() {
    // Section 10.1
    $('.highlight').css({
        backgroundColor: 'red',
        padding: '10px',
        margin: '5px',
        border: '1px solid #ddd'
    });

    $('.highlight').click(function(){
        $(this).hide(1000, function() {
            // is called when the hide is complete
            $(this).next().css('background-color', 'blue');
        });
        // toggles between hide and show
        $('h1').toggle();
    });

    
    $('.sel').change(function() {
        $('.highlight').show(500, function () {
            $('.highlight').css('background-color', $('.sel').val());
        })
    });
})