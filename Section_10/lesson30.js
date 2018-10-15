$(function() {
    // section 10.4
    // hasClass

    // div within a div within a div
    $('div > div > div').click(function() {
        console.log($(this).html());

        // have to use 'children' to get the divs within mainDiv.
        // var classChecker = ($('#mainDiv').children().first().hasClass('highlight')) ? 'Yes' : 'Not Found' ; 
        var classVal = $('#input1').val();
        var backColor = checkClass(classVal, $(this)) ? 'green': 'red';

        $('h1').css('background-color', backColor);
    });

    function checkClass(whatClass, elementToCheck) {
        return elementToCheck.hasClass(whatClass);
        //return $('#mainDiv').children().first().hasClass(whatClass);
    };
})