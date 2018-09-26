$(function () {
  // Chapter 3, video 5

    // sets all list item elements with an index greater than 3 to green text
    $('li:gt(3)').css('color', 'green');
    
    // sets all list item elements with an index less than 2 to orange text
    $('li:lt(3)').css('color', 'orange');
    
    $('li:eq(3)').css('color', 'red');
    
  // this overrides the style setting in the <head> tag since
  // it adds a <style> tag to the item
//  $('.highlight:eq(2)').css('color', 'blue');
//  $('.highlight:nth-child(2)').css('color', 'blue');

//  for (x = 0; x < $('li').length; x++) {
//      $('li:eq(' + x+ ')').html(x+1);
//  }
});