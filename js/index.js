
var cards_array = ['1','2','3','4','5','6','7','8','9','10','11','12'];
var cards_value = [];
var cards_ids = [];
var cards_flipped = 0;


function cardFlip(){
    // code
}

function newGame() {
    cards_flipped = 0;
    var output = '';
    var i;
    
    cards_array.sort(function () {
        return 0.5 - Math.random(); 
    }); // shuffling cards 
    
    for (i = 0; i < cards_array.length; i++) {
        output = output + '<div id="card_'+i+'" class="cards" onclick="cardFlip(this,\''+cards_array[i]+'\')"></div>'
    }
    $('.game-container').append(output);
}

newGame();