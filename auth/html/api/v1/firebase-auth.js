const auth = firebase.auth();

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Logged in
            console.log('User logged in:', userCredential.user);
            document.getElementById('auth-container').style.display = 'none';
            // Proceed to the game or user dashboard
        })
        .catch((error) => {
            console.error('Login error:', error.message);
        });
}

function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up
            console.log('User signed up:', userCredential.user);
            document.getElementById('auth-container').style.display = 'none';
            // Proceed to the game or user dashboard
        })
        .catch((error) => {
            console.error('Signup error:', error.message);
        });
}
