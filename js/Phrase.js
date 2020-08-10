/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/* Handle the creation of phrases */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * This method adds letter placeholders to the display when the game starts. 
   * Each letter is presented by an empty box, one list item for each letter. 
   * 
   * See the example_phrase_html.txt file for an example of what the render HTML for a phrase should look like when * * the game starts, including any `id` or `class` attributes needed. 
   * 
   * When the player correctly guesses a letter, the
   * empty box is replaced with the matched letter (see the `showMatchedLetter()` method below).
   * Make sure the phrase displayed on the screen uses the `letter` CSS class for letters and the
   * `space` CSS class for space.
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
