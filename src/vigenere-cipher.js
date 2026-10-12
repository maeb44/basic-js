const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse = false) {
    this.reverse = reverse;
  }
  ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

  getLetter(str, index) {
    const n = str.length;
    return str[((index % n) + n) % n].toLowerCase();
  }

  encrypt(str, key) {
    if (typeof str != 'string' || typeof key != 'string') {
      throw new Error('Incorrect arguments!');
    }
    let index = 0;
    const res = [...str].map((el) => {
      const posInAlphabet = this.ALPHABET.indexOf(el.toLowerCase());
      if (posInAlphabet === -1) return el;
      const posInKey = this.ALPHABET.indexOf(this.getLetter(key, index));
      index += 1;

      return this.getLetter(
        this.ALPHABET,
        posInAlphabet + posInKey,
      ).toUpperCase();
    });
    if (this.reverse) return res.reverse().join('');
    return res.join('');
  }

  decrypt(str, key) {
    if (typeof str != 'string' || typeof key != 'string' || !str || !key) {
      throw new Error('Incorrect arguments!');
    }
    let index = 0;
    const res = [...str].map((el) => {
      const posInAlphabet = this.ALPHABET.indexOf(el.toLowerCase());
      if (posInAlphabet === -1) return el;
      const posInKey = this.ALPHABET.indexOf(this.getLetter(key, index));
      index += 1;
      return this.getLetter(
        this.ALPHABET,
        posInAlphabet - posInKey,
      ).toUpperCase();
    });
    if (this.reverse) return res.reverse().join('');
    return res.join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(true),
  VigenereCipheringMachine,
};
