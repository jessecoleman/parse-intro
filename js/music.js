// Initialize Parse app
Parse.initialize('L8siIzXNlWBj01lgl3bf7M1wrpa9UVNckMCaSl4K', 'u2SWw0rcOOkHxuBQr5lS4iwRoQRmy6ixN9TKMxtl');

// Create a new sub-class of the Parse.Object, with name "Music"
var Music = Parse.Object.extend('Music');



// Click event when form is submitted
$('form').submit(function() {

	// Create a new instance of your Music class 
	var m2 = new Music();

	// For each input element, set a property of your new instance equal to the input's value

	var input = $('input[type="text"]');
	for(var ele of input) {
		m2.set(ele.id, ele.val());
	}

	/*m2.set('band', $('#name').val());
	m2.set('website', $('#website').val());
	m2.set('song', $('#song').val());*/

	// After setting each property, save your new instance back to your database
	m2.save();

	console.log(m2.get('band'));
	
	return false
})



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class


	// Set a parameter for your query -- where the website property isn't missing


	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	
	// Loop through your data, and pass each element to the addItem function

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function

	
	// Append li that includes text from the data item


	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads


