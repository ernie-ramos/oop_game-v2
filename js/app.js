/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/*  
    PURPOSE:
    create a new instance of the `Game` class 
    and add event listeners for the start button 
    and onscreen keyboard buttons 
*/
const game = new Game;
document.getElementById('btn__reset').addEventListener('click', () => {
    game.startGame();
});

// event listeners

// listener for start button


// listener for onscreen keyboard buttons

const keys = document.getElementsByClassName('key');
for (let key of keys) {
    key.addEventListener('click', e => {
        const letter = e.target;
        game.handleInteraction(letter);
    });
}




