/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* Handle starting and ending the game, interactions, getting a random phrase,
   checking for a win, and removing a life from the scoreboard */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  // create a `startGame()` method in the Game class
  startGame() {
    // hide the start screen overlay (the `div` element with an `id` of `overlay`)
    document.getElementById('overlay').style.display = 'none';

    // calls the `getRandomPhrase()` method to select a Phrase object from the Game object’s array of phrases
    // adds the phrase to the gameboard by calling the `addPhraseToDisplay()` method (which is a method on the 
    // Phrase class) on the selected Phrase object.
    // The selected phrase should be stored in the Game’s `activePhrase` property, so it can be
    // easily accessed throughout the game.
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();

    // const getRandAndAddPhrase = () => {
    //   const phrase = this.getRandomPhrase();
    //   phrase.addPhraseToDisplay();
    //   return phrase;
    // };
    // this.activePhrase = getRandAndAddPhrase();




  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that can be used in the game
   */
  createPhrases() {
    return [
      new Phrase('all over the map'),
      new Phrase('before you know it'),
      new Phrase('blow off steam'),
      new Phrase('break a leg'),
      new Phrase('call it a day'),
    ];
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * 5)];
  }
}
