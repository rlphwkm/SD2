// This JavaScript code is not necessary for the buttons to work, but it can be used to add some styling effects.

const buttons = document.querySelectorAll('.button');

for (const button of buttons) {
	button.addEventListener('mouseover', () => {
		button.style.backgroundColor = '#0069d9';
	});

	button.addEventListener('mouseout', () => {
		button.style.backgroundColor = '#007bff';
	});
}
