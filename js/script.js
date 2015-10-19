var rollCount = 0;
var roundCount = 0;
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
var rollDice = function () {
  // If roll-counter is less than 3 then give a random value to dice.
  if (rollCount < 3 && roundCount < 13) {
    for (var i = 0; i < dice.length; i++)
      if (dice[i].hold === null) {
        dice[i].value = Math.floor((Math.random() * 6) + 1);
        $(".die").eq(i).text(dice[i].value);
      };
      rollCount ++
      $("#roll-counter h3").text(rollCount);
  } else {
    if (rollCount >= 3) {
      alert("You have used up all your rolls... Please pick a category to add score to your score board.")
    } else if (roundCount >= 13) {
      var currentScore = $("#current h4").text();
      alert("Game Over. Your score is " + currentScore);
    };
  };

  // Gets the value of dice
  diceValues = [dice[0].value, dice[1].value, dice[2].value, dice[3].value, dice[4].value];
  getScore();
};




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
   if ($("#ones").hasClass("category-used")) {
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
var checkTwos = function (){
  var counter = 0;
  var sum = 0;
  var used = false;

  // Make used equal to true if the category has been used already
  if ($("#twos").hasClass("category-used")) {
    used = true;
  };

  // If the category has not been used then do all this stuff...
  if (used === false) {
    for (var i = 0; i < diceValues.length; i++) {
      if (diceValues[i] === 2) {
        sum += 2;
        counter ++;
        $("#twos span").text(sum);
      } else {
        $("#twos span").text(sum);
      };
    };
    // If dice contains any "twos" than add a class which highlights it green
    if (counter !== 0) {
      $("div#twos").addClass("highlight");
    } else {
      $("div#twos").removeClass("highlight");
    };
  };
};

// Threes
var checkThrees = function (){
  var counter = 0;
  var sum = 0;
  var used = false;

  // Make used equal to true if the category has been used already
  if ($("#threes").hasClass("category-used")) {
    used = true;
  };

  // If the category has not been used then do all this stuff...
  if (used === false) {
    for (var i = 0; i < diceValues.length; i++) {
      if (diceValues[i] === 3) {
        sum += 3;
        counter ++;
        $("#threes span").text(sum);
      } else {
        $("#threes span").text(sum);
      };
    };
    // If dice contains any "threes" than add a class which highlights it green
    if (counter !== 0) {
      $("div#threes").addClass("highlight");
    } else {
      $("div#threes").removeClass("highlight");
    };
  };
};

// Fours
var checkFours = function (){
  var counter = 0;
  var sum = 0;
  var used = false;

  // Make used equal to true if the category has been used already
  if ($("#fours").hasClass("category-used")) {
    used = true;
  };

  // If the category has not been used then do all this stuff...
  if (used === false) {
    for (var i = 0; i < diceValues.length; i++) {
      if (diceValues[i] === 4) {
        sum += 4;
        counter ++;
        $("#fours span").text(sum);
      } else {
        $("#fours span").text(sum);
      };
    };
    // If dice contains any "fours" than add a class which highlights it green
    if (counter !== 0) {
      $("div#fours").addClass("highlight");
    } else {
      $("div#fours").removeClass("highlight");
    };
  };
};


// Fives
var checkFives = function (){
  var counter = 0;
  var sum = 0;
  var used = false;

  // Make used equal to true if the category has been used already
  if ($("#fives").hasClass("category-used")) {
    used = true;
  };

  // If the category has not been used then do all this stuff...
  if (used === false) {
    for (var i = 0; i < diceValues.length; i++) {
      if (diceValues[i] === 5) {
        sum += 5;
        counter ++;
        $("#fives span").text(sum);
      } else {
        $("#fives span").text(sum);
      };
    };
    // If dice contains any "fives" than add a class which highlights it green
    if (counter !== 0) {
      $("div#fives").addClass("highlight");
    } else {
      $("div#fives").removeClass("highlight");
    };
  };
};

// Sixes
var checkSixes = function (){
  var counter = 0;
  var sum = 0;
  var used = false;

  // Make used equal to true if the category has been used already
  if ($("#sixes").hasClass("category-used")) {
    used = true;
  };

  // If the category has not been used then do all this stuff...
  if (used === false) {
    for (var i = 0; i < diceValues.length; i++) {
      if (diceValues[i] === 6) {
        sum += 6;
        counter ++;
        $("#sixes span").text(sum);
      } else {
        $("#sixes span").text(sum);
      };
    };
    // If dice contains any "sixes" than add a class which highlights it green
    if (counter !== 0) {
      $("div#sixes").addClass("highlight");
    } else {
      $("div#sixes").removeClass("highlight");
    };
  };
};

var sortDice = function () {
    var sorted = diceValues.sort();
    return sorted;
};

// evaluateRolls: function() {
//    this.sortRolls();
//    if (this.isFiveOfKind()) {
//      return 50;
//    } else if (this.isFourOfKind()) {
//      return this.sortedRolls[2] * 4;
//    } else if (this.isStraight()) {
//      return 40;
//    } else if (this.isFullHouse()) {
//      return 25;
//    } else if (this.isThreeOfKind()) {
//      return this.sortedRolls[2] * 3;
//    } else if (this.isSmallStraight()) {
//      return 30;
//    } else {
//      return 0;
//    }
//  },
//
//  isFiveOfKind: function() {
//    return (this.sortedRolls[0] === this.sortedRolls[4]);
//  },
//
//  isFourOfKind: function() {
//    return (this.sortedRolls[0] === this.sortedRolls[3] || this.sortedRolls[1] === this.sortedRolls[4]);
//  },
//
//  isStraight: function() {
//    return compareArrays(this.sortedRolls, [1, 2, 3, 4, 5]) || compareArrays(this.sortedRolls, [2, 3, 4, 5, 6]);
//  },
//
//  isFullHouse: function() {
//    return ((this.sortedRolls[0] === this.sortedRolls[2] && this.sortedRolls[3] === this.sortedRolls[4] && this.sortedRolls[1] !== this.sortedRolls[3]) || (this.sortedRolls[0] === this.sortedRolls[1] && this.sortedRolls[2] === this.sortedRolls[4] && this.sortedRolls[1] !== this.sortedRolls[3]));
//  },
//
//  isThreeOfKind: function() {
//    if (this.isFiveOfKind() || this.isFourOfKind() || this.isFullHouse()) {
//      return false;
//    } else {
//      return((this.sortedRolls[1] === this.sortedRolls[3]) || (this.sortedRolls[0] === this.sortedRolls[2]) || (this.sortedRolls[2] === this.sortedRolls[4]));
//    }
//  },
//
//  isSmallStraight: function() {
//    var straightLength = 1;
//    this.sortedRolls.reduce(function(previousRoll, currentRoll) {
//      if (currentRoll === previousRoll + 1) {
//        straightLength++;
//      } else if (straightLength !== 4 && currentRoll !== previousRoll + 1 && currentRoll !== previousRoll) {
//        straightLength--;
//      }
//      return currentRoll;
//    });
//    return straightLength === 4;
//  },





// Three of a kind
var checkThreeOfKind = function() {
    sortDice();

};

// Four of a kind


// Fullhouse


// Small Straight
// var checkSmall = function () {
//   var sorted = sortDice();
//   if (sorted === [1, 2, 3, 4] || [2, 3 ,4, 5] || [3, 4, 5, 6]) {
//     var sum  = 30;
//     $("#sm-strt span").text(sum);
//     $("#sm-strt").addClass("highlight");
//     alert("Small Straight!");
//   };
// };

// Large Straight


// Chance
var checkChance = function () {
  var sum = 0;
  if ($("#chance span") !== 0) {
    $.each(diceValues, function () {
      sum += this;
    });
    $("#chance span").text(sum);
  }

};

// Yahtzee
var checkYahtzee = function () {
  var sorted = sortDice();
  if (sorted[0] === sorted[1, 2, 3 ,4]) {
    var sum  = 50;
    $("#yahtzee span").text(sum);
    $("#yahtzee").addClass("highlight");
    alert("Yahtzee!")
  };
};

// Adding score to score-board
var calculateScore = function() {
  var allPoints = 0;

  $('.categories').each(function() {
    if ($(this).hasClass('category-used')) {
      allPoints += parseInt($(this).find('span').text());
    };
  });

  $('#current h4').text(allPoints);
};

// Check categories
var getScore = function() {
  checkOnes();
  checkTwos();
  checkThrees();
  checkFours();
  checkFives();
  checkSixes();
  // checkThreeOfKind();

  // checkSmall()
  checkChance();
  checkYahtzee();

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
        console.log("Held die");
        if (dice[i].hold == null) {
          dice[i].hold = dice[i].value;
        } else {
          dice[i].hold = null;
        };
      };
    };
  });

  // Categories on click
  $("div.categories").on('click', function(e) {
    // Add class to a category that has been clicked on
    var $selected = $(e.target);
    $selected.addClass('category-used');

    // Increments counters
    rollCount = 0;
    $("#roll-counter h3").text(rollCount);

    // Removes classes
    $("div.die").removeClass("held");
    $(".categories").removeClass("highlight")

    // Makes all dice to have a value of null
    for (var i = 0; i < dice.length; i++) {
      dice[i].hold = null;
    };

    // Sets highscore if higher than current score
    calculateScore();
    if ($("#current h4").text() > $("#highscore h4").text()){
      $("#highscore h4").text($("#current h4").text());
    };

  });

  // New game button on click
  $("#new-game").on("click", function() {
    // Removes classes
    $(".categories").removeClass("highlight");
    $(".categories").removeClass("category-used");

    // Resets counters
    $("#round-counter span").text("1");
    roundCount = 0;
    $("#roll-counter h3").text("0")
    rollCount = 0;
    $(".categories span").text("0")

    // Makes all dice to have a value of null
    for (var i = 0; i < dice.length; i++) {
      dice[i].hold = null;
      $(".die").removeClass("held");
    };

    // Sets highscore if higher than current score
    if ($("#current h4").text() > $("#highscore h4").text()){
      $("#highscore h4").text($("#current h4").text());
    };

    // Sets current score to 0
    $("#current h4").text("0")
  });

// End document.ready
});
