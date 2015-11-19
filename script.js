$(function() {
	$('form').on('submit', function(e) {
		var submission = $(this).serializeArray();
		event.preventDefault();
		console.log(submission);

		/*Color-coding functino for ratings*/
		// for (var i = 0; i < submission.length; i++) {
		// 	var elem2 = submission[i].name;
		// 	if (elem2 === 'Review Score') {
		// 	switch (elem) {
		// 		case '0':
		// 			$li.addClass("rating0");
		// 			break;
		// 		case '1':
		// 			$li.addClass("rating1");
		// 			break;
		// 		case '2':
		// 			$li.addClass("rating2");
		// 			break;
		// 		case '3':
		// 			$li.addClass("rating3");
		// 			break;
		// 		case '4':
		// 			$li.addClass("rating4");
		// 			break;
		// 		case '5':
		// 			$li.addClass("rating5");
		// 			break;
		// 		default:
		// 			alert("Please enter a number between 0 and 5");
		// 		}
		// 	};			
		// };

	});

	$('section').on('click', 'button', function() {
		$(this).closest('ul').remove();

	//Creating template for displaying new employees
	var employeeDisplay = $("#employee-list").html();
	//Compiling handlebars
	var template = Handlebars.compile(employeeDisplay);
	//Pass submitted data to template
	var compiledHtml = template({employees: submission.getList()});
	//Adding html to page
	$(".employeeDisplay").append(compiledHtml);
	});
});


