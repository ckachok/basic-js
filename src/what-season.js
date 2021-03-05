const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if ({}.toString.call(date).slice(8, -1) !== 'Date') {
    throw new Error('Function argument is not an object Date');
  }  

  let month = date.getMonth();

  switch (true) {
    case month === 11 || month <= 1:
      return 'winter';
      break;
    case month <= 4:
      return 'spring';
      break;
    case month <= 7:
      return 'summer';
      break;
    case month <= 10:
      return 'autumn';
      break; 
  }
};
