$(function() {
	$('form').on('submit', function(e) {
		var submission = $(this).serializeArray();
		event.preventDefault();
		console.log(submission);

		var $ul = $('<ul>');
		$ul.text(submission[0].value + '\'s Review');
		$('section').append($ul);

		for (var i = 0; i < submission.length; i++) {
			var elem = submission[i].value;
			var elem2 = submission[i].name;
			var $li = $('<li>');
			$li.text(elem2 + ": " + elem);
			$('ul:last').append($li);
		}
		$button = $('<button>');
		$button.text('Remove');
		$('ul:last').append($button);
	});


//Why is this not working?!?! 
	$('section').on('click', 'button', function() {
		$(this).closest('ul').remove();
	});
});