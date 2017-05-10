
var cards_array = ['1','2','3','4','5','6','7','8','9','10','11','12']; // memory_array
var cards_value = [];  //memory_values
var cards_ids = []; // memory_tile_ids
var cards_flipped = 0; // tiles_fliped


function cardFlip(card,card_value){
    if (cards_value.length < 2) {
        console.log('I am here lol');
        card.style.backgroundImage= 'url(../images/card'+cards_array[card_value]+'.jpg)';
        card.style.backgroundPosition= 'center center';
        card.style.backgroundRepeat= 'no-repeat';
        card.style.backgroundSize= 'cover';
        
        if (cards_value.length == 0) { // if there are no cards flipped over
            cards_value.push(card_value);
            cards_ids.push(card.id);
            
            console.log(cards_value[0],cards_ids[0]);
            
            
        } else if(cards_value.length == 1) { // if there is already 1 card flipped over and user is clicking second one
            cards_value.push(card_value);
            cards_ids.push(card.id);
            
            console.log(cards_value[0],cards_ids[0]);
            console.log(cards_value[1],cards_ids[1]);
            
            if (cards_value[0]== cards_value[1]) { // check if both cards are a match
                cards_flipped = cards_flipped +2;
                // Clear both arrays
                cards_value = []; 
                cards_ids = [];
                // Check if the whole board is cleared
                if (cards_flipped == cards_array.length) {
                    alert("You won !!! .....making new game now");
                    $('.game-container').innerHTML = "";
                    newGame();
                }
            } else {
                    function flipCardBack() {
                        var card_1 = document.getElementById(cards_ids[0]);
                        var card_2 = document.getElementById(cards_ids[1]);
                        
                        card_1.style.background='url(../images/cardBG.jpg)';
                        card.style.backgroundPosition= 'center center';
                        card.style.backgroundRepeat= 'no-repeat';
                        card_1.style.backgroundSize= 'cover';
                        
                        card_2.style.background='url(../images/cardBG.jpg)';
                        card.style.backgroundPosition= 'center center';
                        card.style.backgroundRepeat= 'no-repeat';
                        card_2.style.backgroundSize= 'cover';
                        
                        cards_value = [];
                        cards_ids = [];
                    }
                    setTimeout(flipCardBack,700);
                }  
            
        } 
    }
}


function newGame() {
    cards_flipped = 0;
    var output = '';
    var i;
    
    cards_array.sort(function () {  // Shuffle cards
        return 0.5 - Math.random(); 
    });  
    
    for (i = 0; i < cards_array.length; i++) {
        output = output + '<div id="card_'+i+'" class="cards" onclick="cardFlip(this,\''+cards_array[i]+'\')"></div>'
    }
    $('.game-container').append(output);
}

newGame();