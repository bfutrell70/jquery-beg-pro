$(function() {
    // section 11.1
    // jQuery slide animation

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
                // moves the div up and hides it
                $('#output2').slideUp(5000);
            }
            if ($(this).index() == 2)
            {
                // moves the div down and shows it
                $('#output2').slideDown(1000);
            }
            if ($(this).index() == 3)
            {
                // toggles between showing and hiding the div
                $('#output2').slideToggle("fast");
            }
        })  
})