$(function () {
    // sets all elements with a class of 'highlight' to red
    $('.highlight').css('color', 'red');
    
    // sets the HTML of all elements with a class of 'highlight' to 'First'
    $('.highlight').html('First');
    
    // sets the HTML of all elements with a class of 'highlight' to 'Default'
    $('.highlight').html('Default');
    
    // sets the HTML of the first element with a class of 'highlight' to 'First'
    $('.highlight:first').html('First');
    
    // sets the HTML of the first list item element to 'The one'
    $('li:first-child').html('The one');
    
    // sets the HTML of the last element with a class of 'highlight' to 'Last'
    $('.highlight:last').html('Last');
    
    // sets the HTML of the even numbered elements with a class of 'highlight' to 'Even'
    $('.highlight:even').html('Even');
    
    // sets the HTML of the odd numbered elements with a class of 'highlight' to 'Odd'
    $('.highlight:odd').html('Odd');
});