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
			if (elem2 === 'Review Score') {
				switch (elem) {
					case '0':
						$li.addClass("rating0");
						break;
					case '1':
						$li.addClass("rating1");
						break;
					case '2':
						$li.addClass("rating2");
						break;
					case '3':
						$li.addClass("rating3");
						break;
					case '4':
						$li.addClass("rating4");
						break;
					case '5':
						$li.addClass("rating5");
						break;
					default:
						alert("Please enter a number between 0 and 5");
				}
			};
			$('ul:last').append($li);			
		};

		$button = $('<button>');
		$button.text('Remove');
		$('ul:last').append($button);
	});

	$('section').on('click', 'button', function() {
		$(this).closest('ul').remove();
	});
});