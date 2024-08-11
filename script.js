let currentLanguage = 'en'; // Default language

// Function to show settings
function showSettings() {
    document.getElementById('settings-container').style.display = 'block';
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('laptop-selection-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('creation-container').style.display = 'none';
}

// Function to go back to the menu
function backToMenu() {
    document.getElementById('menu-container').style.display = 'block';
    document.getElementById('settings-container').style.display = 'none';
    document.getElementById('laptop-selection-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('creation-container').style.display = 'none';
}

// Function to start the game
function startGame() {
    document.getElementById('game-container').style.display = 'block';
    document.getElementById('menu-container').style.display = 'none';
}

// Function to show laptop selection
function showLaptopSelection() {
    document.getElementById('laptop-selection-container').style.display = 'block';
    document.getElementById('menu-container').style.display = 'none';
}

// Function to show creation mode
function showCreation() {
    document.getElementById('creation-container').style.display = 'block';
    document.getElementById('menu-container').style.display = 'none';
}

// Function to change language
function changeLanguage() {
    const language = document.getElementById('language').value;
    currentLanguage = language;
    updateTexts();
}

// Function to update texts based on the selected language
function updateTexts() {
    const texts = {
        en: {
            message: 'Click to fix the laptop! BE CAREFUL UNTIL IT EXPLODES',
            play: 'Play',
            laptopSelection: 'Laptop Selection',
            creation: 'Creation (Coming Soon)',
            backToMenu: 'Back to Menu',
            settings: 'Settings'
        },
        pl: {
            message: 'Kliknij, aby naprawić laptopa! UWAŻAJ, ABY NIE WYBUCHŁ!',
            play: 'Graj',
            laptopSelection: 'Wybór laptopa',
            creation: 'Tworzenie (Wkrótce)',
            backToMenu: 'Powrót do menu',
            settings: 'Ustawienia'
        }
        // Add more languages here
    };

    const text = texts[currentLanguage];
    
    // Update text content based on the selected language
    document.getElementById('message').textContent = text.message;
    document.querySelector('#menu-container button:nth-child(1)').textContent = text.play;
    document.querySelector('#menu-container button:nth-child(2)').textContent = text.laptopSelection;
    document.querySelector('#menu-container button:nth-child(3)').textContent = text.creation;
    document.querySelector('#menu-container button:nth-child(4)').textContent = text.settings;
    document.querySelector('#settings-container button').textContent = text.backToMenu;
}

// Initial call to set text in default language
updateTexts();
