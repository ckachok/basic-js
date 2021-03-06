const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainLinks: [],

  getLength() {
    return this.chainLinks.length;
  },

  addLink(value) {
    arguments.length === 0 ? 
    this.chainLinks.push(`( )`) : 
    this.chainLinks.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || 
        !Number.isInteger(position) ||
        position < 1 ||
        position > this.getLength()) {
          this.chainLinks.length = 0;
          throw new Error('Position is not integer number or out of range');
    }
    this.chainLinks.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chainLinks.reverse();
    return this;
  },

  finishChain() {
    const chain = this.chainLinks.join('~~');
    this.chainLinks.length = 0;
    return chain;
  }
};

module.exports = chainMaker;

