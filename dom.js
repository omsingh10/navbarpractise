// Access elements from the DOM
const header = document.getElementById('header');
const intro = document.getElementById('intro');
const changeButton = document.getElementById('changeButton');
const addElementButton = document.getElementById('addElementButton');
const container = document.getElementById('container');

// Change the text content of the header
header.textContent = 'Welcome to the DOM!';

// Modify the content of the paragraph when the button is clicked
changeButton.addEventListener('click', function() {
    intro.textContent = 'The content has been changed dynamically!';
});

addElementButton.addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is a new paragraph added dynamically!';
    container.appendChild(newParagraph);
});
