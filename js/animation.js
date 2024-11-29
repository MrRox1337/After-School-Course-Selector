// Define a string of uppercase alphabet letters to use for the random animation effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Initialize a variable to store the interval ID for the animation
let interval = null;

// Select the DOM element with the ID "sitename"
const siteName = document.getElementById("sitename");

// Check if the element exists before proceeding
if (siteName) {
	console.log("Element selected:", siteName); // Log the selected element for debugging

	// Add an event listener to handle the mouseover event
	siteName.onmouseover = (event) => {
		console.log("Data-value attribute:", event.target.dataset.value); // Log the data-value attribute for debugging

		// Initialize the iteration counter to control the animation's progress
		let iteration = 0;

		// Clear any existing animation interval to avoid overlaps
		clearInterval(interval);

		// Start a new interval to animate the text transformation
		interval = setInterval(() => {
			// Transform the inner text of the target element
			event.target.innerText = event.target.innerText
				.split("") // Split the text into an array of individual characters
				.map((letter, index) => {
					// Replace each character conditionally
					if (index < iteration) {
						// If the current index is less than the iteration count,
						// use the corresponding character from the data-value attribute
						return event.target.dataset.value[index];
					}
					// Otherwise, replace the character with a random letter
					return letters[Math.floor(Math.random() * 26)];
				})
				.join(""); // Join the array back into a single string

			// Stop the animation once the iteration covers the full text
			if (iteration >= event.target.dataset.value.length) {
				clearInterval(interval); // Clear the interval to stop further updates
			}

			// Increment the iteration count, adjusting the speed by adding fractions
			iteration += 2 / 3;
		}, 30); // Run the interval every 30 milliseconds
	};
} else {
	// Log a message if the element with ID "sitename" is not found
	console.log("Element not found.");
}
