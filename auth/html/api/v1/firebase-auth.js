const db = firebase.firestore();

function saveUserProgress(level, score) {
    const user = auth.currentUser;

    if (user) {
        db.collection('users').doc(user.uid).set({
            level: level,
            score: score
        })
        .then(() => {
            console.log('User progress saved.');
        })
        .catch((error) => {
            console.error('Error saving progress:', error);
        });
    }
}

function getUserProgress() {
    const user = auth.currentUser;

    if (user) {
        db.collection('users').doc(user.uid).get()
        .then((doc) => {
            if (doc.exists) {
                console.log('User progress:', doc.data());
                // Load progress into the game
            } else {
                console.log('No progress found.');
            }
        })
        .catch((error) => {
            console.error('Error fetching progress:', error);
        });
    }
}
```
