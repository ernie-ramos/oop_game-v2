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

  handleInteraction(letter) {
    const letterPresent = this.activePhrase.checkLetter(letter);
    letterPresent ? this.activePhrase.showMatchedLetter(letter) : this.removeLife(letter);
    this.checkForWin();
  }

  /**
  * Checks for winning move
  * @return {function} `gameWon` is true if game has been won, false if game wasn't won
  */
  checkForWin() {
    let gameWon = null;
    if (this.missed === 5) {
      gameWon = false;
      this.gameOver(gameWon);
    }
    const winCondition = document.getElementsByClassName('hide').length;
    if (winCondition === 0) {
      gameWon = true;
      this.gameOver(gameWon);
    }

  };

  /**
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  */
  removeLife(letter) {
    this.missed += 1;

    const heartIndex = this.missed - 1;
    const hearts = document.getElementsByClassName('tries');
    const heartImage = hearts[heartIndex].firstElementChild;
    heartImage.src = "images/lostHeart.png";

    letter.classList.add("wrong");
    letter.disabled = true;
  };

  /**
  * Displays game over message
  * @param {boolean} gameWon - Whether or not the user won the game
  */
  gameOver(gameWon) {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';

    const message = document.getElementById('game-over-message');

    gameWon ? message.textContent = "You Win! 🤗" : message.textContent = "You Lose 😔";
  };

  gameReset() {
    this.missed = 0;
    this.activePhrase = null;

    const pressEnterList = document.getElementsByClassName('header reset');
    while (pressEnterList.length > 0) {
      for (const li of pressEnterList) {
        const parent = li.parentNode;
        parent.removeChild(li);
      }
    }

    const listWin = document.getElementsByClassName('show');
    while (listWin.length > 0) {
      for (const li of listWin) {
        const parent = li.parentNode;
        parent.removeChild(li);
      }
    }

    const listLose = document.getElementsByClassName('hide');
    while (listLose.length > 0) {
      for (const li of listLose) {
        const parent = li.parentNode;
        parent.removeChild(li);
      }
    }

    const space = document.getElementsByClassName('space');
    while (space.length > 0) {
      for (const li of space) {
        const parent = li.parentNode;
        parent.removeChild(li);
      }
    }

    const keys = document.getElementsByClassName('key');
    for (const key of keys) {
      key.classList.remove("chosen");
      key.classList.remove("wrong");
      key.disabled = false;
    }

    const hearts = document.getElementsByClassName('tries');
    for (const heart of hearts) {
      heart.firstElementChild.src = "images/liveHeart.png";
    }
  }

  startGame() {
    this.gameReset();

    document.getElementById('overlay').style.display = 'none';
    const phrase = this.getRandomPhrase();
    this.activePhrase = phrase;
    phrase.addPhraseToDisplay(this.activePhrase);
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
