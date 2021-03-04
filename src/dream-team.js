const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  let nameTeam = [];   
  
  if (!Array.isArray(members)) {   
    return false;
  }

  members.forEach((element) => {
    if (typeof element === 'string') {
      nameTeam.push(element.trim()[0].toUpperCase());   
    }
  })

  return nameTeam.sort().join('');  

};

