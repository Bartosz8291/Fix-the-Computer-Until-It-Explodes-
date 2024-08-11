let fixCount = 0;
const maxFixes = 20; 

const laptop = document.getElementById('laptop');
const message = document.getElementById('message');

laptop.addEventListener('click', fixLaptop);

function fixLaptop() {
    fixCount++;

    if (fixCount < maxFixes) {
        message.textContent = `Fixing... (${fixCount}/${maxFixes})`;
    } else {
        explode();
    }
}

function explode() {
    laptop.src = 'assets/explode.gif';
    message.textContent = 'Boom! TOO LATE!!!!!!!!!!!!!!!!!!!!!!!!!!!! The laptop exploded!';
    laptop.style.cursor = 'not-allowed';
    laptop.removeEventListener('click', fixLaptop);
}
