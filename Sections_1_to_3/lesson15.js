$(function () {
    // section 3, video 8

    // $('li').click(function() {

    //     // filters the list items to only those with the class of 'highlight'.
    //     //$('li').filter('.highlight').css('color', 'red');

    //     // changes the clicked list item to red if it has a class of 'highlight'.
    //     $(this).filter('.highlight').css('color', 'red');
    // })

    // // when a paragraph is clicked set the first list item text to blue.
    // $('p').click(function() {
    //     console.log($('li'));

    //     $('li').first().css('color', 'blue');
    // });

    // when a paragraph is clicked set the text for list items that contain a 'span' to green.
    $('p').click(function() {
        console.log($('li'));

        $('li').has('span').css('background-color', 'green');
    });
});
