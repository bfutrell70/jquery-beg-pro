$(function () {
    $('.btn').click(function() {

        // get only checkboxes that are checked
        // with '.val()' it only returns the first checked item
        // 10/9/18 - using the map function allows the current values of the
        //           checkboxes to be used.
        var checkedButtons = $('input:checked').map(function() {
            return $(this).val();
        });
        console.log(checkedButtons);

        // var firstName = $('input[name="first"]').val();
        // var lastName = $('input[name="last"]').val();
        // $('h1').html(firstName + " " + lastName);

        // this only picks up on the initial value of the input fields
        // since that is what is assigned to the DOM.
        //$('input[value="jquery"]').val("YES it's jQuery");
    })

    $('form').submit(function(e) {
        e.preventDefault();
        console.log("Please don't submit me!");

        if ($('input:checked').length > 0) {
            $('form').css('background-color', 'blue');
        }
        else {
            $('form').css('background-color', 'red');
        }
    })
})