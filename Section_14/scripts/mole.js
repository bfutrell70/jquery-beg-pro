var score = 0;
var gameover = false;
var lasthole = 0;

$(function() {
    $('#start').click(startGame);

    $('.game').on('click', '.mole', hitMole);

    // handles hitting a mole
    function hitMole() {
        // show the 'whack' image
        $(this).parent().find('img').show();
        
        $(this).hide();

        // fade out the 'whack' image gradually
        $(this).parent().find('img').fadeOut(1000);

        score++;
        $('.score').text(score);
    }

    // handles starting the game (clicking Start Game!)
    function startGame() {
        // make game board
        makeGameBoard();

        gameover = false;
        score = 0;
        $('.score').text(score);

        // start gameplay
        startMoles();

        // timer for gameplay
        // set for 5 seconds
        setTimeout(function() {
            return gameend();
        }, 5000);
    }

    // handles ending the game
    function gameend() {
        gameover = true;
        $('.message').html('GAME OVER');
    }

    // create the game board
    function makeGameBoard() {
        var moles = 8;
        var html = '';

        for (var mole=0; mole < moles; mole++) {
            html += '<div class="hole hole' + mole + '"><div class="mole"></div>';
            html += '<img class="wack" src="images/whack.png"><div class="dirt"></div></div>';
        }

        $('.game').html(html);
    }

    // randomly selects a hole index
    function randomHole() {
        var hole = Math.floor(Math.random() * $('.hole').length);
        
        // prevents the hole number from being the same as the previous hole
        if (hole == lasthole) {
            return randomHole();
        }
        lasthole = hole;
        return hole;
    }

    // randomly pops up a mole and animates it
    function startMoles() {
        var jumpUp = $('.hole' + randomHole() + '> .mole');
        
        // randomly generate a delay to lower the molegit log
        var timer = Math.round(Math.random() * 1000) + 400;
        
        jumpUp.show();
        jumpUp.animate({
            top: '50px'
        }, 100);

        setTimeout(function() {
            jumpUp.animate({
                top: '250px'
            }, 1000)
            if (!gameover) startMoles();
        }, timer)
    }
})