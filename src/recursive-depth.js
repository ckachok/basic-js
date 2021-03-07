const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depthArr = 1;
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        this.depthArr = 1 + this.calculateDepth(element);
        if (this.depthArr > depthArr) {
          depthArr = this.depthArr;
        }
      } 
    });
    return depthArr;
  }
};