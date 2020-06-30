/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    const a = 'all over the map';
    const b = 'before you know it';
    const c = 'blow off steam';
    const d = 'break a leg';
    const e = 'call it a day';
    return [
      new Phrase(a),
      new Phrase(b),
      new Phrase(c),
      new Phrase(d),
      new Phrase(e),
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
