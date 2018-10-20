$(function() {
    $('input').first().before('Image text');
    $('input').after('<br>');

    $('input[type="color"]').first().before('Background color :');
    $('input[type="color"]').last().before('Text color :');

    $('input').change(function() {
        event.preventDefault();

        var colors = $('input[type="color"]');
        var colorBack = cleanHash(colors.first().val());
        var colorFront = cleanHash(colors.last().val());
        var textHolder = cleanSpace($('input[type="text"]').val());
        var url = "https://via.placeholder.com/300x150";
        
        url += "/" + colorBack;
        url += "/" + colorFront;
        url += "?text=" + textHolder;

        $('img').attr('src', url);

        $('input[type="text"]').last().val(url);
    })

    function cleanHash(arg) {
        return arg.replace("#", "");
    }

    function cleanSpace(arg) {
        return arg.replace(" ", "+");
    }
})