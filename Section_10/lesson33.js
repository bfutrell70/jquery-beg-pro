$(function() {
    // Section 10.7!
    // jQuery forms and events

    // NOTE: stopped at 2:10 in the video.

    // making sure the checkbox is checked

    $('button').on('click', submitForm);

    $('input[name="agree2"]').change(function() {
        //alert('Checked button ' + $(this).attr('name'));
        $('input').removeAttr('placeholder');
    })

    function submitForm() {
        // serializes form elements into a string
        var formValues = $('form').serialize();

        // splits the form values into separate elements
        var tempHolder = formValues.split('&');

        var $agree1 = $('input[name="agree1"]');
        var $agree2 = $('input[name="agree2"]');

        if ($agree1.prop('checked'))
        {
            outputUpdate(tempHolder);
        }
        else
        {
            alert('You must agree to the TOS');
        }
    };

    function outputUpdate(tempHolder) {
        $('#mainDiv').empty();
        $('input').css('background-color', 'white');

        $.each(tempHolder, function(index, value) {
            var itemParts = value.split('=');

            var el = $('input[name="' + itemParts[0] + '"]');
            
            // removes any elements after the one in 'el' with a class of 'error'
            el.nextAll('.error').remove();

            if (el.val() == '') {
                el.css('background-color', 'red');
                el.after('<div class="error">' + itemParts[0] +' is missing</div>');    
            }

            $('#mainDiv').append(itemParts[0] + '\'s value is ' + itemParts[1] + '<br>');
        })
    }
})