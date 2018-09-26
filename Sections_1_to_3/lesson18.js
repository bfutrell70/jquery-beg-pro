$(function () {
    // section 3, video 11

    $('ul').attr('title', 'List title');

    // when a span is clicked get the closest 'ul' element and
    // log it to the console.
    // parent, grandparent, etc.
    /*$('span').click(function() {
        var eleDad = $(this).closest('ul');

        console.log(eleDad);

        console.log(eleDad.attr('title'));
    });*/

    // when a span sleement is clicked looks for the next span
    // and sets the text color to red.
    $('span').click(function() {
        $(this).next().css('color', 'red');

        // finds the previous span element and sets the text color
        // to green.
        $(this).prev().css('color', 'green');

    });

    $('li').click(function() {
        /*
        // finds the previous list element and sets the text color
        // to red.
        $(this).next().css('color', 'red');

        // finds the previous list element and sets the text color
        // to green.
        $(this).prev().css('color', 'green');

        // sets the text of all list items after the current one
        $(this).nextAll().text("I'm next!");

        // sets the text of all previous list items before the current one.
        $(this).prevAll().text("I'm previous!");
        */

        // finds all spans within the currently selected list item and sets
        // the color to yellow
        $(this).find('span').css('color', 'yellow');
    })

});
