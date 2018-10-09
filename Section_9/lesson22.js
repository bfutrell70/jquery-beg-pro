$(function() {
    var counter = 0;

    // // single click handler
    // $('.highlight').click(function() {
    //     counter++;
    //     $(this).text("clicked " + counter);
    // });

    // // double click handler
    // $('.highlight').dblclick(function() {
    //     $(this).text("Double clicked");
    // });

    // // handles hovering over the element
    // $('.highlight').hover(function() {
    //     $(this).text("Hover over me!");
    // });

    // handles pressing down the mouse button
    $('.highlight').mousedown(function() {
        $(this).text("mouse down!");
    });

    // handles releasing the mouse button
    $('.highlight').mouseup(function() {
        $(this).text("mouse up!");
    });

    // handles entering the element with the mouse
    // similar to hover event
    $('.highlight').mouseenter(function() {
        $(this).text("mouse enter!");
    });

    // handles leaving the element with the mouse
    $('.highlight').mouseleave(function() {
        $(this).text("mouse leave!");
    });

    // handles moving within the element with the mouse
    $('.highlight').mousemove(function() {
        $(this).text("mouse move!");
    });

    // handles moving out of the element with the mouse
    // similar to mouseleave
    $('.highlight').mouseout(function() {
        $(this).text("mouse move!");
    });
})