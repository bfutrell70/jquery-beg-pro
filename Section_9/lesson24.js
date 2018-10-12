$(function() {
    // section 9.3 - browser events

    // handles resizing the browser window
    $(window).resize(function() {
        $('.highlight').html($(window).width());
        //console.log($(window).width());
    });

    $(window).scroll(function() {
        console.log('scrolling');
    });
})