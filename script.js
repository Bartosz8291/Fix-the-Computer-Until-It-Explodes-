let fixCount = 0;
const maxFixes = 20;  // Number of clicks before explosion

const laptop = document.getElementById('laptop');
const message = document.getElementById('message');

laptop.addEventListener('click', () => {
    fixCount++;

    if (fixCount < maxFixes) {
        message.textContent = `Fixing... (${fixCount}/${maxFixes})`;
    } else {
        explode();
    }
});

function explode() {
    laptop.src = 'assets/explode.gif';  // Placeholder image for explosion
    message.textContent = 'Boom! The laptop exploded!';
    laptop.style.cursor = 'not-allowed';
    laptop.removeEventListener('click', () => {});  // Disable further clicks
}
