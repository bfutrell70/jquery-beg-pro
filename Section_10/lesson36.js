$(function() {
    // section 10.11

    // form error classes

    $('button').on('click', submitForm);

    function submitForm() {
        var $el = $('input[type="text"], input[type="password"]');
        $el.prev('label').removeClass('error');
        console.log($el);

        for (x=0; x < $el.length; x++)
        {
            // this statement won't work since $el[x] is based on the DOM.
            //console.log($el[x].val());
            console.log($el.eq(x).val());

            console.log($el.eq(x).attr("name"));
            if($el.eq(x).val() == '') {
                $el.eq(x).prev('label').addClass('error');
            }
        }
    }
})