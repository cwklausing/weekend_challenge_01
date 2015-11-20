//Employee constructor
function Employee(firstName, lastName, empNumber, empTitle, reviewScore, salary) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.empNumber = empNumber;
		this.empTitle = empTitle;
		this.reviewScore = reviewScore;
		this.salary = salary;
	}

//list for storing employees
var list = [];

$(function() {

	//Compiling template
	var template = Handlebars.compile($('#employee-list').html());
	
	$('form').on('submit', function(event) {
		
		event.preventDefault();

		var firstName = $('#firstName').val();
		var lastName = $('#lastName').val();
		var empNumber = $('#empNumber').val();
		var empTitle = $('#empTitle').val();
		var reviewScore = $('#reviewScore').val();
		var salary = $('#salary').val();

		//push submitted employee to the 'list'
		list.push(new Employee(firstName, lastName, empNumber, empTitle, reviewScore, salary));
		console.log(list);
		/*Color-coding functino for ratings*/
		// for (var i = 0; i < list.length; i++) {
		// 	var elem2 = list[i].name;
		// 	if (elem2 === 'Review Score') {
		// 	switch (elem) {
		// 		case '0':
		// 			$li.addClass("rating0");
		// 			break;
		// 	a	case '1':
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
		//If button in section is clicked, remove the <ul> closest to button
	
	
	//Pass submitted data to template
	var compiledHtml = template({employees: list});
	//Adding html to page
	$(".employeeDisplay").html(compiledHtml);
	
	});
	
	$('section').on('click', 'button', function() {
		$(this).closest('ul').remove();
		});
});



