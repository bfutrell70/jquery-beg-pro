$(function () {
    // section 3, video 7
    $('li, p').click(function () {
        // jQuery 'this'
        // shows the DOM for the element
        console.log($(this));

        // JavaScript 'this'
        // merely shows the HTML element
        console.log(this);
    });

    // alternative method to set up a click method.
    // NOTE: this method has been depracated.
//    $('p').bind('click', function() {
//       console.log("Bind clicked");
//    });

    $('img').on('click', function() {
        console.log("Image clicked");
    });

    $('a').on('click', function(e) {
        e.preventDefault();
    })
});
