$(function() {
    // section 12.10
    // More APIs more AJAX

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

    $('.btn-2').click(function() {
        $.ajax({
            url: 'https://api.randomuser.me/?results=150',
            // optional - jQuery attempts to determine the MIME type of data from the URL
            dataType: 'json',
            success:(function(data) {

                var html = '<h1>People</h1>';

                $.each(data.results, function(i, v) {
                    html += '<span><img src="' + v.picture.large + '"></span>';
                    //html += '<img src="' + v.picture.large + '">';
                    // if ((i + 1) % 5 == 0)
                    // {
                    //     html += "<br>";
                    // }
                })

                // for (var i = 0; i < data.results.length; i++)
                // {
                //     var result = data.results[i];
                //     html += '<img src="' + result.picture.large + '">';
                //     if ((i + 1) % 5 == 0)
                //     {
                //         html += "<br>";
                //     }
                // }

                $('#output1').html(html);
            })
        })
    })
    
})