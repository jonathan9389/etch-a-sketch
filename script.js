const container = document.querySelector('#container');
const promptBtn = document.querySelector('.prompt-btn');

// Generates a grid of 'size x size' squares
function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('item');
        cell.style.width = `calc(100% / ${size})`; // Dynamically set width to fit the grid
        container.appendChild(cell);
    }
}

// Initialize a default 16x16 grid on page load
createGrid(16);

// Prompts user for a valid grid size (1-100)
function askForNum() {
    while (true) {
        let rawInput = prompt('Max grid limit is 100');

        // Handle "Cancel" button
        if (rawInput === null) {
            alert('You clicked cancel.');
            return 16; // Fallback to default 16x16 grid
        }

        // Handle empty inputs
        if (rawInput.trim() === "") {
            alert("You didn't type anything! Please enter a number.");
            continue;
        }

        const parsed = parseInt(rawInput, 10);

        // Handle non-number inputs
        if (isNaN(parsed)) {
            alert("That is not a valid number. Try again.");
            continue;
        // Handle numbers outside the allowed range
        } else if (parsed < 1 || parsed > 100) {
            alert("Enter the valid number between: 1-100");
            continue;
        }

        // Return valid input
        return parsed;
    }
}

// Generates a new grid when the prompt button is clicked
promptBtn.addEventListener('click', () => {
    container.innerHTML = ''; // Clear the existing grid elements
    const gridSize = askForNum(); // Get valid grid size from user
    createGrid(gridSize); // Create the new grid
});

// Uses event delegation to handle hover effects on grid items
container.addEventListener('mouseover', function (e) {
    const square = e.target.closest('.item');

    // Ignore hovers on the container itself
    if (!square) return;

    // 1. First hover: Assign a random RGB color and set initial brightness
    if (!square.style.backgroundColor) {
        const rand = () => Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgb(${rand()}, ${rand()}, ${rand()})`;
        square.dataset.brightness = '100'; // Store brightness in an HTML data-* attribute
    }

    // 2. Subsequent hovers: Darken the square by 10%
    let brightness = parseInt(square.dataset.brightness, 10);

    if (brightness > 0) {
        brightness -= 10; // Reduce brightness variable
        square.dataset.brightness = brightness; // Save updated brightness back to HTML
        square.style.filter = `brightness(${brightness}%)`; // Apply visual darkening via CSS
    }
});