const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    if (value === '') {
      this.chain.push(`()`);
      return this;
    }
    this.chain.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const chain = this.chain.join('~~');
    this.chain = [];
    return chain;
  },
};

console.log(
  chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain(),
);

module.exports = {
  chainMaker,
};
