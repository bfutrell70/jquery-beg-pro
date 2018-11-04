$(function() {
    // section 12.8
    // Web APIs AJAX

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
            url: 'https://api.randomuser.me/',
            // optional - jQuery attempts to determine the MIME type of data from the URL
            dataType: 'json',
            success:(function(data) {
                console.log(data);
                var randomPic = data.results[0].picture.large;
                var randomName = data.results[0].name.first + " "  + data.results[0].name.last;

                var html = '<img src="' + randomPic + '"><br>' +
                            '<p>' + randomName + '</p>'

                $('#output1').html(html);
            })
        })
    })
    
})