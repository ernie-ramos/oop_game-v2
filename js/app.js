/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game;
document.getElementById('btn__reset').addEventListener('click', () => {
    game.startGame();
});

const keys = document.getElementsByClassName('key');
for (let key of keys) {
    key.addEventListener('click', e => {
        const letter = e.target;
        game.handleInteraction(letter);
    });
}





