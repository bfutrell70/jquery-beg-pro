$(function() {
    // section 12.13
    // Connect more web APIs

    $('#output1, #output2').css({
        'position': 'relative'
    });

    $('.btn').css({
        'border': '1px solid black',
        'width': '150px',
        'padding': '10px'
    });

    // jokes
    $('.btn-1').click(function() {
        var url = 'http://api.icndb.com/jokes/random/';
        $.getJSON(url, function(data) {
            $('#output1').html(data.value.joke);
        });

    })

    // appears to be a paged list of Star Wars characters
    $('.btn-2').click(function() {
        var url = 'https://swapi.co/api/people/?format=json';
        $.getJSON(url, function(data) {
            var html = "<h2>Star Wars Characters</h2>";
            $.each(data.results, function(i, v) {
                html += v.name + "</br>";
            })
            $('#output1').html(html);
        });
    })

    // Marvel Universe Characters
    $('.btn-3').click(function() {
        var url = 'https://raw.githubusercontent.com/mattdesl/marvel-characters/master/characters.json';
        $.getJSON(url, function(data) {
            console.log(data)
            var html = "<h2>Marvel Universe Characters</h2>";
            $.each(data, function(i, v) {
                html += v + "</br>";
            })
            $('#output1').html(html);
        });
    })

})