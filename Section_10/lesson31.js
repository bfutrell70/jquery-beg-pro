$(function() {
    // section 10.6
    // more form stuff!

    $('#btnSubmit').on('click', submitForm);

    function submitForm() {
        // serializes form elements into a string
        var formValues = $('#myForm').serialize();

        console.log(formValues);
    };
})