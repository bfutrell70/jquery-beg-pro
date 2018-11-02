$(function() {
    // section 12.7
    // Shorthand get and getJSON

    $('#output1, #output2').css({
        'position': 'relative'
    });

    $('.btn').css({
        'border': '1px solid black',
        'width': '150px',
        'padding': '10px'
    });

    $('.btn-1').click(function() {
        $.ajax({
            url: 'https://api.myjson.com/bins/e94by',
            // optional - jQuery attempts to determine the MIME type of data from the URL
            dataType: 'json',

            // success:(function(data) {
            //     console.log("SUCCESS (within $.ajax)");
            //     console.log(data);
            // })
        }).done(function(rp,status,xhr) {
            // called if the AJAX call is successful
            console.log("DONE");
            console.log(rp); // json response
            console.log(status);
            console.log(xhr);

        }).fail(function(d) {
            // called if the AJAX call fails
            console.log("FAIL");
            console.log(d);
        }).always(function() {
            // always run regardless of success or failure, but is called after everything else
            console.log("ALWAYS");
        });
    })
    
    $('.btn-2').click(function() {
        var url = 'https://api.myjson.com/bins/e94by';
        $.get(url, function(data) {
            console.log(data);
            $('h1').html(data.firstName + " " + data.lastName);
        })
        
    })

    $('.btn-3').click(function() {
        //var url = 'https://api.myjson.com/bins/e94by';
        var url = 'https://api.myjson.com/bins/23xvb';
        $.getJSON(url, function(data) {
            console.log(data);
            $('h1').text(data.firstName + " " + data.lastName);
        })
    })
    
    
})