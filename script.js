$(function() {
	$('form').on('submit', function(e) {
		var submission = $(this).serializeArray();
		event.preventDefault();
		console.log(submission);

		var $ul = $('<ul>');
		$ul.addClass('entry').appendTo('.display');

		for (var i = 0; i < submission.length; i++) {
			var elem = submission[i];
			var $li = $('<li>');
			$li.text(elem);
			$('ul').closest().append($li);
		}
	})
});