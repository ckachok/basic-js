const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error('Function argument is not an array')
  }

  let newArr = [];
  
  arr.forEach((element, index) => {
    switch (element) {
      case '--discard-next':
      break;
      case '--discard-prev':
        if (newArr.length !== 0 && arr[index - 2] !== '--discard-next') {
          newArr.pop();
        }
      break;
      case '--double-next':
        if (index !== arr.length - 1) {
          newArr.push(arr[index + 1]);
        }
      break;
      case '--double-prev':
        if (index !== 0 && arr[index - 2] !== '--discard-next') {
          newArr.push(arr[index - 1]);
        }
      break;
      default:
        if (arr[index - 1] !== '--discard-next') {
          newArr.push(arr[index]);
        }
    }
  });
  
  return newArr;
  
};



