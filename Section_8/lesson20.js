$(function () {
    $('input').css("background-color", "yellow");

    $('input[type="date"]').css("background-color", "red");

    $('input[type="color"]').css("background-color", 'blue');
    $('.btn').click(function() {
        // only get checkboxes that are checked
        var myCheckboxes = $('input[type="checkbox"]').attr({
            checked: true
        });

        console.log(myCheckboxes.val());
    })
    
})