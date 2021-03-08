const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(isDirect) {
    if (isDirect === true || isDirect === undefined) {
      this.isReverse = !isDirect;
    }
  }

  encrypt(message, key) {
    if (typeof message !== 'string' || 
            typeof key !== 'string' || 
              message === undefined || 
                  key === undefined) {
      throw new Error('The method arguments are not string or missing');
    }
    
    let str = message.toUpperCase();
    let keyword = key.toUpperCase();
    let arrEncryption = [];
    let numUnicodeLetter;
    
    for (let i = 0, j = 0; i < str.length; i++) {
      if (str[i].match(/[A-Z]/) === null) {
        arrEncryption.push(str[i]);
      } else if (str.charCodeAt(i) + keyword.charCodeAt(j % keyword.length) - 130 < 26) {
        numUnicodeLetter = str.charCodeAt(i) + keyword.charCodeAt(j % keyword.length) - 65;
        arrEncryption.push(String.fromCharCode(numUnicodeLetter));
        j++;
      } else {
        numUnicodeLetter = str.charCodeAt(i) + keyword.charCodeAt(j % keyword.length) - 91;
        arrEncryption.push(String.fromCharCode(numUnicodeLetter));
        j++;
      }
    }
    return this.isReverse ? arrEncryption.join('') : arrEncryption.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (typeof encryptedMessage !== 'string' || 
                     typeof key !== 'string' || 
              encryptedMessage === undefined || 
                           key === undefined) {
      throw new Error('The method arguments are not string or missing');
    }

    let str = encryptedMessage.toUpperCase();
    let keyword = key.toUpperCase();
    let arrDecryption = [];
    let numUnicodeLetter;
    
    for (let i = 0, j = 0; i < str.length; i++) {
      if (str[i].match(/[A-Z]/) === null) {
        arrDecryption.push(str[i]);
      } else if (str.charCodeAt(i) - keyword.charCodeAt(j % keyword.length) < 0) {
        numUnicodeLetter = str.charCodeAt(i) - keyword.charCodeAt(j % keyword.length) + 91;
        arrDecryption.push(String.fromCharCode(numUnicodeLetter));
        j++;
      } else {
        numUnicodeLetter = str.charCodeAt(i) - keyword.charCodeAt(j % keyword.length) + 65;
        arrDecryption.push(String.fromCharCode(numUnicodeLetter));
        j++;
      }
    }
    return this.isReverse ? arrDecryption.join('') : arrDecryption.reverse().join('');
  }
} 

module.exports = VigenereCipheringMachine;
