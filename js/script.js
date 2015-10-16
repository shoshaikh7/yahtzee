var rollCount = 0

// Dice array
var dice = [
  {
    id: "die-1",
    value: Math.floor((Math.random() * 6) + 1),
    hold: null,
  },
  {
    id: "die-2",
    value: Math.floor((Math.random() * 6) + 1),
    hold: null,
  },
  {
    id: "die-3",
    value: Math.floor((Math.random() * 6) + 1),
    hold: null,
  },
  {
    id: "die-4",
    value: Math.floor((Math.random() * 6) + 1),
    hold: null,
  },
  {
    id: "die-5",
    value: Math.floor((Math.random() * 6) + 1),
    hold: null,
  }
];

// Rolls Dice
var rollDice = function() {
  for (var i = 0; i < dice.length; i++)
    if (dice[i].hold === null) {
      dice[i].value = Math.floor((Math.random() * 6) + 1);
      $('.die').eq(i).text(dice[i].value);
    };
};

// Gets the value of dice
var diceValues = function() {
	return [dice[0].value,dice[1].value,dice[2].value,dice[3].value,dice[4].value]
}


$(document).ready(function() {

  // Roll Dice Event
  $('#roller').on('click', function() {
    rollDice();
  });

  // Hold Dice Event
  $("div.die").on('click', function(e) {
     var $selected = $(e.target);
     $selected.toggleClass("held");
     for (var i = 0; i < dice.length; i++) {
       if (dice[i].id == $selected.attr('id')) {
         console.log("sup");
         if (dice[i].hold == null) {
           dice[i].hold = dice[i].value;
         } else {
           dice[i].hold = null;
         };
       };
     };
   });

   // Add class to a category that has been clicked on
     $("div.categories").on('click', function(e) {
       var $selected = $(e.target);
       $selected.addClass('category-used');
     });

});
