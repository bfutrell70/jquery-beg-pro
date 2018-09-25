$(function () {
    // section 3, video 12
    $('span').css({
        "border-color": "red",
        "border-width": "1px",
        "border-style": "solid",
        "padding": "1px"
    });


    $('span').click(function () {
        $(this).siblings().css('color', 'blue');

        // selects all elements at the same level and sets the text
        // same parent, but would have different children.
        $(this).siblings().text("I'm a brother or a sister!");
    });
});
