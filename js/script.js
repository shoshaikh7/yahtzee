var rollCount = 0


// var rollTheDice = function() {
//   var value = null;
//   var diceCount = 1;
//   for (i = 0; i < diceCount; i++) {
//       value = Math.floor(Math.random() * 6) + 1;
//   };
//   document.getElementById('dice1').innerHTML = value;
//   console.log(value)
// };

// var Dice = function(id) {
//   this.id = id;
//   this.value = Math.floor(Math.random() * 6) + 1;
//   this.hold = false;
// };

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

var rollDice = function() {
  for (var i = 0; i < dice.length; i++)
    if (dice[i].hold === null) {
      dice[i].value = Math.floor((Math.random() * 6) + 1);
      $('.die').eq(i).text(dice[i].value);
    };
};


$(document).ready(function() {

  // Roll Dice Event
  $('#roller').on('click', function() {
    rollDice();
  });

  // Hold Dice Event
  $("div.die").on('click', function(e) {
     var $selected = $(e.target);
     $selected.addClass("held");
     for (var i = 0; i < dice.length; i++) {
       if (dice[i].id == $selected.attr('id')) {
         console.log("sup")
         if (dice[i].hold == null) {
           dice[i].hold = dice[i].value;
         };
       };
     };
   });

   $("div.die").off('click', function(e) {
      var $selected = $(e.target);
      $selected.removeClass("held");
      dice.hold = null
    });

  //  $("div.die").unbind('click', function(e) {
  //    var $selected = $(e.target);
  //    if ($selected.hasClass('held')) {
  //       $selected.removeClass('held');
  //    };
  //  };


   // Add class to a category that has been clicked on
     $("div.categories").on('click', function(e) {
       var $selected = $(e.target);
       $selected.addClass('category-used');
     });

});




//
// // Starts a new game, resetting some of the classes and score
// var newGame = function() {
//   $('.categories').each(function() {
//     $(this).removeClass('category-used');
//     $(this).find('span').text("0");
//   });
//   calculateAll();
// }
//
// $(document).ready(function() {
//
//   // Add class to a category that has been clicked on
//   $("div.categories").on('click', function(e) {
//     var $selected = $(e.target);
//     $selected.addClass('category-used');
//   });
//
//   $("div.dice").on('click', function(e) {
//     var $selected = $(e.target);
//     $selected.addClass('held');
//   });
//
//   // Roll Dice Event
//   $('#roller').on('click', function() {
//     rollTheDice();
//   });
//
//
// })
