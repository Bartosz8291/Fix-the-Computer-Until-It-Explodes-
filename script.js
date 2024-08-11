let fixCount = 0;
let maxFixes = 10;  // Starting number of clicks for level 1
let currentLevel = 1;
let gamePaused = false;

const levels = {
    1: 5,     // Easier
    2: 10,    // Easy
    3: 20,    // Normal
    4: 30,    // Hard
    5: 40,    // Harder
    6: 50,    // Insane
    7: 60,    // Easy Demon
    8: 70,    // Demon
    9: 80,    // Hard Demon
    10: 90,   // Insane Demon
    11: 100,  // Extreme Demon
    12: 120   // Extreme Demon
};

const laptop = document.getElementById('laptop');
const message = document.getElementById('message');
const pauseButton = document.getElementById('pauseButton');

function startGame() {
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    fixCount = 0;
    currentLevel = 1;
    maxFixes = levels[currentLevel];
    gamePaused = false;
    pauseButton.textContent = 'Pause';
    message.textContent = `Level ${currentLevel}: Click to fix the laptop! (${fixCount}/${maxFixes})`;
    laptop.addEventListener('click', fixLaptop);
}

function showLaptopSelection() {
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('laptop-selection-container').style.display = 'block';
}

function showCreation() {
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('creation-container').style.display = 'block';
}

function backToMenu() {
    document.getElementById('laptop-selection-container').style.display = 'none';
    document.getElementById('creation-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('menu-container').style.display = 'block';
}

pauseButton.addEventListener('click', togglePause);

function fixLaptop() {
    if (gamePaused) return;

    fixCount++;

    if (fixCount < maxFixes) {
        message.textContent = `Level ${currentLevel}: Fixing... (${fixCount}/${maxFixes})`;
    } else {
        levelUp();
    }
}

function levelUp() {
    currentLevel++;
    if (currentLevel > 12) {
        message.textContent = "Congratulations! You've completed all levels!";
        laptop.removeEventListener('click', fixLaptop);
        pauseButton.style.display = 'none';
        return;
    }

    fixCount = 0;
    maxFixes = levels[currentLevel];
    message.textContent = `Level ${currentLevel} started! Keep fixing! (${fixCount}/${maxFixes})`;
}

function explode() {
    laptop.src = 'assets/explode.gif';
    message.textContent = 'Boom! TOO LATE!!!!!!!!!!!!!!!!!!!!!!!!!!!! The laptop exploded!';
    laptop.style.cursor = 'not-allowed';
    laptop.removeEventListener('click', fixLaptop);
    pauseButton.style.display = 'none';
}

function togglePause() {
    gamePaused = !gamePaused;
    pauseButton.textContent = gamePaused ? 'Resume' : 'Pause';
    message.textContent = gamePaused ? 'Game Paused' : `Level ${currentLevel}: Fixing... (${fixCount}/${maxFixes})`;
}

auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('User is logged in:', user);
        // Show the game interface
    } else {
        console.log('No user logged in');
        // Show the login/signup form
    }
});
