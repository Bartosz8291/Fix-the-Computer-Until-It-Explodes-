let fixCount = 0;
const maxFixes = 20;  // Number of clicks before explosion
let isPaused = false; // Track whether the game is paused

const laptop = document.getElementById('laptop');
const message = document.getElementById('message');
const pauseButton = document.getElementById('pauseButton');

// Function to handle laptop clicks
laptop.addEventListener('click', () => {
    if (isPaused) return; // Ignore clicks if the game is paused

    fixCount++;

    if (fixCount < maxFixes) {
        message.textContent = `Fixing... (${fixCount}/${maxFixes})`;
    } else {
        explode();
    }
});

// Function to handle the game explosion
function explode() {
    laptop.src = 'assets/explode.gif';  // Placeholder image for explosion
    message.textContent = 'Boom! TOO LATE!!!!!!!!!!!!!!!!!!!!!!!!!!!! The laptop exploded!';
    laptop.style.cursor = 'not-allowed';
    laptop.removeEventListener('click', () => {});  // Disable further clicks
}

// Function to pause the game
function pauseGame() {
    isPaused = true;
    message.textContent = 'Game Paused. Click "Resume" to continue.';
    pauseButton.textContent = 'Resume'; // Change button text to "Resume"
}

// Function to resume the game
function resumeGame() {
    isPaused = false;
    message.textContent = `Fixing... (${fixCount}/${maxFixes})`;
    pauseButton.textContent = 'Pause'; // Change button text back to "Pause"
}

// Event listener for the pause/resume button
pauseButton.addEventListener('click', () => {
    if (isPaused) {
        resumeGame();
    } else {
        pauseGame();
    }
});
