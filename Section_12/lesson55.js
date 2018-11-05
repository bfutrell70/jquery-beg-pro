$(function() {
    // section 12.10
    // More APIs more AJAX
    // stopped at 1:39

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
                })

                $('#output1').html(html);
            })
        })
    })

    $('.btn-3').click(function() {
        console.log("btn-3 clicked");
        $.ajax({
            url: 'https://api.github.com/gists',
            dataType: 'json',
            success: (function(data) {
                var html = '<ul>';

                $.each(data, function(i, v) {
                    html += '<li><b>' + v.created_at + '</b> ' + v.description + '</li>';
                })

                html += '</ul>';

                $('#output1').html(html);
            })
        })
    })
})