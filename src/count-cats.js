const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let numberCats = 0;
  matrix.forEach(element => {
    element.forEach(item => {
      if (item === "^^") {
        numberCats++;
      }
    });
  });
  return numberCats;
};

