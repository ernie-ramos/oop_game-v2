/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game;
document.getElementById('btn__reset').addEventListener('click', () => {
    game.startGame();
});

// detect keyboard presses to start game and handleInteractions.
document.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        game.startGame();
    }
    if (/^[A-Z]$/i.test(e.key)) {
        const keys = document.getElementsByClassName('key');
        for (let key of keys) {
            if (e.key === key.textContent) {
                const letter = key;
                game.handleInteraction(letter);
            }
        }
    }
});

const keys = document.getElementsByClassName('key');
for (let key of keys) {
    key.addEventListener('click', e => {
        const letter = e.target;
        game.handleInteraction(letter);
    });
}





