$(function() {
    // section 12.12
    // jQuery ajax post

    $('#output1, #output2').css({
        'position': 'relative'
    });

    $('.btn').css({
        'border': '1px solid black',
        'width': '150px',
        'padding': '10px'
    });

    $('.btn-1').click(function() {
        // This URL may or may not work in the future....
        // as of 11/5/2018 it does.
        // it simply accepts JSON data an returns the same data in JSON.
        var url = "http://s179017901.onlinehome.us/discoveryvip/";

        // serializes names and data for submission
        var myData = $('#myForm').serialize();
        console.log(myData);

        // shorthand for posting data to a URL
        $.post(url, myData, function(data) {
            console.log(data);
            $('#output1').append(
              "thank you for your submission:<br>" +
              data.input1 + "<br>" +
              data.input2 + "<br>" + 
              data.sel  
            );
        })
    })

    $('.btn-2').click(function() {
        // This URL may or may not work in the future....
        // as of 11/5/2018 it does.
        // it simply accepts JSON data an returns the same data in JSON.
        var urlToPost = "http://s179017901.onlinehome.us/discoveryvip/";

        // serializes names and data for submission
        var myData = $('#myForm').serialize();
        console.log(myData);

        $.ajax({
            type: 'POST',
            url: urlToPost,
            data: myData,
            success: (function(data) {
                console.log(data);

                $('#output1').append(
                    "thank you for your submission:<br>" +
                    data.input1 + "<br>" +
                    data.input2 + "<br>" + 
                    data.sel  
                );
            })
        })

    })

})