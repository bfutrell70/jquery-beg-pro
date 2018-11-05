$(function() {
    // section 12.11
    // AJAX jQuery Post Data

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

})