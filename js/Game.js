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
    //Math.floor(Math.random() * 5 )
  }
}
