        let fixCount = 0;
        const maxFixes = 20;  // Number of clicks before explosion
        let isPaused = false; // Track whether the game is paused
        let currentLanguage = 'en'; // Default language

        const laptop = document.getElementById('laptop');
        const message = document.getElementById('message');
        const pauseButton = document.getElementById('pauseButton');

        // Function to show settings
        function showSettings() {
            document.getElementById('settings-container').style.display = 'block';
            document.getElementById('menu-container').style.display = 'none';
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
                    settings: 'Settings',
                    play: 'Play',
                    laptopSelection: 'Laptop Selection',
                    creation: 'Creation (Coming Soon)',
                    backToMenu: 'Back to Menu',
                },
                pl: {
                    message: 'Kliknij, aby naprawić laptopa! UWAŻAJ, ABY NIE WYBUCHŁ!',
                    settings: 'Ustawienia',
                    play: 'Graj',
                    laptopSelection: 'Wybór laptopa',
                    creation: 'Tworzenie (Wkrótce)',
                    backToMenu: 'Powrót do menu',
                }
                // Add more languages here
            };

            const text = texts[currentLanguage];
            
            document.getElementById('message').textContent = text.message;
            document.querySelector('#menu-container button:nth-child(2)').textContent = text.play;
            document.querySelector('#menu-container button:nth-child(3)').textContent = text.laptopSelection;
            document.querySelector('#menu-container button:nth-child(4)').textContent = text.creation;
            document.querySelector('#settings-container button').textContent = text.backToMenu;
        }

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

        // Initial call to set text in default language
        updateTexts();
