$(function() {
    // Section 10.7!

    // NOTE: stopped at 2:10 in the video.

    // making sure the checkbox is checked

    $('button').on('click', submitForm);

    function submitForm() {
        // serializes form elements into a string
        var formValues = $('form').serialize();

        // splits the form values into separate elements
        var tempHolder = formValues.split('&');

        $('#mainDiv').empty();
        $.each(tempHolder, function(index, value) {
            var itemParts = value.split('=');

            var el = $('input[name="' + itemParts[0] + '"]');
            // conditionally applies a red or white background to the input element 
            // based on if it has a value or not
            el.css('background-color', el.val() == "" ? 'red' : 'white');

            $('#mainDiv').append(itemParts[0] + '\'s value is ' + itemParts[1] + '<br>');
        })
    };
})