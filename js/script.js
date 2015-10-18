var rollCount = 0
var diceValues = [];

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
  diceValues = [dice[0].value, dice[1].value, dice[2].value, dice[3].value, dice[4].value];
  getScore();
};

// Gets the value of dice


// CATEGORIES
// Check array if there are any conditions that will make function true
// Highlight category if conditions are met
// Take away highlight when condition is false
// Get score based on condition
// Add to score to main score if category is clicked on
// Disable category if already used in the current game

// Ones
 var checkOnes = function (){
   var counter = 0;
   var sum = 0;
   var used = false;

   // Make used equal to true if the category has been used already
   if ($(".categories").hasClass("category-used")) {
     used = true;
   };

   // If the category has not been used then do all this stuff...
   if (used === false) {
     for (var i = 0; i < diceValues.length; i++) {
       if (diceValues[i] === 1) {
         sum += 1;
         counter ++;
         $("#ones span").text(sum);
       } else {
         $("#ones span").text(sum);
       };
     };
     // If dice contains any "ones" than add a class which highlights it green
     if (counter !== 0) {
       $("div#ones").addClass("highlight");
     } else {
       $("div#ones").removeClass("highlight");
     };
   };
 };

// Twos


// Threes


// Fours


// Fives


// Sixes


// Three of a kind


// Four of a kind


// Fullhouse


// Small Straight


// Large Straight


// Chance


// Yahtzee

// Adding score to score-board
var calculateScore = function() {
  var allPoints = 0;

  $('.categories').each(function() {
    if ($(this).hasClass('category-used') || $(this).hasClass('frozen')) {
      allPoints += parseInt($(this).find('span').text());
    };
  });

  $('#current h4').text(allPoints);
};

// Check categories
var getScore = function() {
  checkOnes();
  // checkTwos();
  // checkThrees();
  // checkFours();
  // checkFives();
  // checkSixes();

  calculateScore();
};


// Document.ready
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
