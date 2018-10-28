$(function() {
    // section 11.2
    // jQuery fade animation

    $('.btn')
        .css({
            border: '1px solid black', 
            padding: '10px',
            width: '150px'
        })
        .click(function() {
            // index of the element that contains the 'btn' class that was clicked
            console.log($(this).index());

            if ($(this).index() == 1)
            {
                // $('#output2').fadeIn(2000);
                // console.log("fade in ready");
                $('#output2').fadeTo(1000, 0.5, function() {
                    console.log('Faded to 50%')
                });
            }
            if ($(this).index() == 2)
            {
                // moves the div down and shows it
                $('#output2').fadeOut(1000);
                console.log("fade out ready");
            }
            if ($(this).index() == 3)
            {
                // toggles between showing and hiding the div
                $('#output2').fadeToggle("fast");
                console.log("fade toggle ready");
            }
        })  
})