$(function() {
    // section 10.3
    // app3ne versus prepend

    var counter = 0;
    $('.highlight').click(function() {
        counter++;
        // added before the clicked element.
        // in this case the div with a class of 'highlight'
        // if there is text already there it is added after the
        // existing text and the clicked element
        $(this).before('BEFORE ' + counter);
        // added to the end of the contents of the clicked elememt
        $(this).append('clicked ' + counter);
        // added to the beginning of the contents of the clicked element
        $(this).prepend('Pre ' + counter);

        // adds text after the clicked element.
        // if there is already text after the element the text
        // is added before the text but after the element.
        $(this).after('AFTER ' + counter);
    });

    $('h1').click(function() {
        counter++;
        $('h1').prepend(counter);
        $('h1').before('B'+counter);
    })

})