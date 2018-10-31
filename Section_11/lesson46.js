$(function() {
    // section 11.7
    // jQuery Utilities Explored

    var myArray = ['hello', 'world', 55];

    $('#output1, #output2').css({
        'position': 'relative'
    });

    $('.btn').css({
        'border': '1px solid black',
        'width': '150px',
        'padding': '10px'
    });

    $('.btn').first().click(function() {
        // checks if a variable is an array
        if ($.isArray(myArray))
        {
            // loops through elements in the array
            $.each(myArray, function(index, value) {
                console.log(index, value)
            })
        }
    });

    $('.btn:eq(1)').click(function() {
        var tempVal = $.trim($('#input1').val());

        // checks to see if the value in tempVal exists in myArray
        // -1 = not in array, other value = index of the array that matches the value
        console.log($.inArray(tempVal, myArray));
    })

    $('.btn').last().click(function() {

    })

})