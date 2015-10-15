// function getScore {
//
// };

var rollCount = 0

// Starts a new game, resetting some of the classes and score
function newGame() {
	$('.categories').each(function(){
		$(this).removeClass('category-used');
		$(this).find('span').text("0");
	});
	calculateAll();
}

$(document).ready(function() {

  // Add class to a category that has been clicked on
  $("div.categories").on('click', function(e) {
    var $selected = $(e.target);
    $selected.addClass('category-used');
  });


})
