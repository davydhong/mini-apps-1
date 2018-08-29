// this.$ = window.jQuery.noConflict(true);

class App {
	constructor() {}
	// POST ajax request that takes in the form value as input.
	ajaxPOST(formData) {
		$.ajax({
			url: 'http://127.0.0.1:3000/post',
			type: 'post',
			data: formData,
			contentType: 'application/json',
			success: function(result) {
				// console.log(result);
				// Back-end sends the processed data as response.
				$('.csv').html(result);
			},
			error: function(error) {
				console.log('Error', error);
			},
		});
	}
}

var app = new App();

$('#jsonForm').submit(function(event) {
	// Stop form from submitting normally
	event.preventDefault();
	// Get values from elements on the page:
	// If nothing is put in, takes the placeholder as a default value.
	var $form = $(this),
		term = $form.find("textarea[name='s']").val() || document.getElementById('input').attributes.placeholder.value;

	app.ajaxPOST(JSON.stringify(JSON.parse(term)));
});
