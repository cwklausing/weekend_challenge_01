$(function() {
	$('form').on('submit', function(e) {
		var submission = $(this).serializeArray();
		event.preventDefault();
		console.log(submission);

		var $ul = $('<ul>');
		$ul.text('Employee Review');
		$('section').append($ul);

		for (var i = 0; i < submission.length; i++) {
			var elem = submission[i].value;
			var $li = $('<li>');
			$li.text(elem);
			$('ul:last').append($li);
		}
		$button = $('<button>');
		$button.text('Remove');
		$('ul:last').append($button);
	})

	// $('section').on('click', 'button' function(e) {
	// 	event.preventDefault();
	// 	$(this).closest("ul").detach();
	// };
});