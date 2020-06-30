/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const ul = document.querySelector('.main-container ul');

    const game = new Game();
    const phrase = game.getRandomPhrase();
    const indPhrase = phrase.phrase;

    let phraseArr = [];
    for (let i = 0; i < indPhrase.length; i++) {
      phraseArr.push(indPhrase[i]);
    }

    phraseArr.forEach((char) => {
      const isAlpha = (ch) => {
        return /^[A-Z]$/i.test(ch);
      }; // https://stackoverflow.com/questions/40120915/javascript-function-that-returns-true-if-a-letter

      const createLi = (string) => {
        const li = document.createElement('li');
        li.className = string;
        li.textContent = char;
        ul.appendChild(li);
      };

      isAlpha(char) ? createLi(`hide letter ${char}`) : createLi('space');
    });
  }
}

// all over the map
// before you know it
// blow off steam
// break a leg
// call it a day
// cat nap
// disco nap
// get the hang of it
// give props to
// head over heels
// here and there
// hit me up
// keep me in the loop
// keep me posted
// not for nothing
// ruffle feathers
// sea legs
// take the wind out of your sails
// two peas in a pod
