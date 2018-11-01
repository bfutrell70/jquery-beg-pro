$(function() {
    // section 12.2
    // jquery AJAX Load Data

    $('#output1, #output2').css({
        'position': 'relative'
    });

    $('.btn').css({
        'border': '1px solid black',
        'width': '150px',
        'padding': '10px'
    });

    $('.btn').click(function() {
        if ($(this).hasClass('btn-1')) {
            // must view the page using http/https instead of file
            // I added the Live Server extesion in VS Code to do this
            // https://stackoverflow.com/questions/30039512/how-to-view-my-html-code-in-browser-with-visual-studio-code/48721885#48721885
            $('h1').load('hello.txt')
        }
    });

    
})