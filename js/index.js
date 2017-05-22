
var cards_array = [
    {card_id:0, bg_img:"card_1", pair:1},
    {card_id:1, bg_img:"card_1", pair:1},
    {card_id:2, bg_img:"card_2", pair:2},
    {card_id:3, bg_img:"card_2", pair:2},
    {card_id:4, bg_img:"card_3", pair:3},
    {card_id:5, bg_img:"card_3", pair:3},
    {card_id:6, bg_img:"card_4", pair:4},
    {card_id:7, bg_img:"card_4", pair:4},
    {card_id:8, bg_img:"card_5", pair:5},
    {card_id:9, bg_img:"card_5", pair:5},
    {card_id:10, bg_img:"card_6", pair:6},
    {card_id:11, bg_img:"card_6", pair:6}
];

// shuffle array
cards_array.sort(function() {
    return 0.5 - Math.random() 
});

for (var i=0;i<12;i++){
    /*console.log(cards_array[i].card_id +","+ cards_array[i].bg_img +","+ cards_array[i].pair);*/
    
    $("#game").append("<div class='cards card_0' id='" + cards_array[i].card_id + "'></div>");
}


$(".cards").on( "click", function(e) {
    
    var id = $(this).attr("id");
    $( this ).removeClass( "card_0" );
    $( this ).addClass( cards_array[id].bg_img );
    
    

});