$(function() {
    // section 10.10
    // page manipulation classes

    $('#topnav ul li a').click(function() {
        // remove 'active' class from all links within the nav div
        $('#topnav ul li a').removeClass('active');

        // add the 'active' class to the currently selected anchor element.
        $(this).addClass('active');
    })
})