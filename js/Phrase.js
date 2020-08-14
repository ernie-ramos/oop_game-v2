/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/* Handle the creation of phrases */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
  * Checks if passed letter is in phrase
  * @param (obj) letter - Letter to check
  */
  checkLetter(letter) {
    return this.phrase.includes(letter.textContent);
  };

  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter) {
    const list = document.getElementsByClassName('hide letter');
    for (const li of list) {
      if (li.textContent === letter.textContent) {
        li.className = 'show';
        letter.classList.add("chosen");
        letter.disabled = true;
      }
    }
    // called twice to fix bug: the same consecutive letter was not being revealed, i.e., in the word `call` guessing l would only display the first l.
    for (const li of list) {
      if (li.textContent === letter.textContent) {
        li.className = 'show';
        letter.classList.add("chosen");
        letter.disabled = true;
      }
    }

  };

  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  addPhraseToDisplay(phraseObj) {
    const ul = document.querySelector('.main-container ul');

    const phrase = phraseObj.phrase;
    let phraseArr = [];
    for (let i = 0; i < phrase.length; i++) {
      phraseArr.push(phrase[i]);
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

