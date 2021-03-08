const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let arrStrings = [];
  let arrAddStrings = [];
  let finalString;

  if (options.hasOwnProperty('repeatTimes')) {               
    if (Number.isInteger(options.repeatTimes) && options.repeatTimes > 0) {
      for (let i = 0; i <= options.repeatTimes - 1; i++) {
        arrStrings.push(String(str));
      }
    } else {
      throw new Error('The value for repeatTimes is not an integer or less than zero');
    }
  } else {
    arrStrings.push(String(str));
  }

  if (options.hasOwnProperty('additionRepeatTimes')) {
    if (Number.isInteger(options.additionRepeatTimes) && options.additionRepeatTimes > 0) {
      for (let i = 0; i <= options.additionRepeatTimes - 1; i++) {
        arrAddStrings.push(String(options.addition));
      }
    } else {
      throw new Error('The value for additionRepeatTimes is not an integer or less than zero')
    }
  } else if (options.hasOwnProperty('addition')) {
    arrAddStrings.push(String(options.addition));
  }

  if (arrAddStrings.length > 1) {
    for (let i = 0; i < arrAddStrings.length - 1; i++) {
      arrAddStrings[i] = arrAddStrings[i] + (options.additionSeparator || '|');
    }
  }

  if (arrStrings.length > 0) {
    for (let i = 0; i <= arrStrings.length - 1; i++) {
      arrStrings[i] = arrStrings[i] + arrAddStrings.join('');
    }
  }
  
  finalString = arrStrings.join(options.separator || '+');
  
  return finalString;
}    