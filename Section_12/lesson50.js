$(function() {
    // section 12.5
    // jquery AJAX

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
            url: 'https://api.myjson.com/bins/e94by' //,
            // optional - jQuery attempts to determine the MIME type of data from the URL
            //dataType: 'text'
        }).done(function(d) {
            console.log("DONE");
            console.log(d);
        });
    })
    
    $('.btn-2').click(function() {

    })

    $('.btn-3').click(function() {

    })
    
    
})