$(function() {
    var counter = 0;

    $('.highlight').click(function() {
        counter++;

        // appends to the end of the container
        $(this).append('clicked ' + counter);

        // appends to the beginning of the container
        $(this).prepend('Pre ' + counter);
    })
})