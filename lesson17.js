$(function () {
    // section 3, video 10

    $('ul').attr('title', 'List title');

    // lists all child elements listed in a paragraph element
    $('.btn').click(function() {
        var eleKids = $('p').children();

        console.log(eleKids);
    });

    // when a span is clicked get the span's parent element and
    // log it to the console.
    $('span').click(function() {
        var eleDad = $(this).parent().parent();

        console.log(eleDad);

        console.log(eleDad.attr('title'));
    });


});
