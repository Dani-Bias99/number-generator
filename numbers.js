const numDisplay = document.getElementById('number');
const generateBtn = document.getElementById('generate');

// Function to generate a random integer between a min and max (inclusive)
const generateRandomInteger = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Add an event listener to the button
generateBtn.addEventListener('click', () => {
    // Generate a random number (e.g., between 1 and 100)
    numDisplay.innerHTML = generateRandomInteger(1, 100);
});
