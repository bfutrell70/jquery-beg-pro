$(function() {
    // section 11.6
    // jQuery Animation Fun Plus UI

    $('.btn').click(function() {
        var str = $(this).text().slice(-1);
        console.log(str);

        if (str == '1')
        {
            $('.highlight').animate({
                opacity: '0.5',
                letterSpacing: '+=10px',
                marginTop: '+=10px'
            });
        }

        if (str == '2')
        {
            $('.highlight').animate({
                opacity: '0.5',
                letterSpacing: '-=10px'
            });
        }

        if (str == '3')
        {
            $('.highlight').animate({
                opacity: '0.5',
                letterSpacing: '+=10px',
                lineHeight: '30px',
                color: 'red'
            }, 500).animate({
                opacity: '1.0',
                letterSpacing: '-=10px',
                lineHeight: '16px',
                color: 'black'
            }, 500);
        }

    });

})