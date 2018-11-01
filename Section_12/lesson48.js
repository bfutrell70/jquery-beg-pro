$(function() {
    // section 12.3
    // jquery Load More Data

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

        if ($(this).hasClass('btn-2')) {
            // must view the page using http/https instead of file
            // I added the Live Server extesion in VS Code to do this
            // https://stackoverflow.com/questions/30039512/how-to-view-my-html-code-in-browser-with-visual-studio-code/48721885#48721885
            
            // load entire contents into h1 tag
            $('h1').load('hello.html')

            // only loads the element with a class of one from the HTML file
            //$('h1').load('hello.html .one')
            
            // only loads the element with an ID of two from the HTML file
            //$('h1').load('hello.html #two')
        }

    });
    
})