$(function () {
    // section 3, video 9

    $('.btn').click(function() {

        // map generates an array with the contents returned from its function.
        var eleHighlight = $('.highlight').map(function() {
            return $(this).html();
        });

        console.log(eleHighlight[2]);

        // starts with the list item <li> at index 3 to index 7 and sets the background color to yellow.
        $('li').slice(3,7).css("background-color", "yellow");

    });
});
