const CustomError = require("../extensions/custom-error");

    const modernActivity = 15; 
    const halfLifePeriod = 5730;

module.exports = function dateSample(sampleActivity) {

    const rateReaction = 0.693 / halfLifePeriod;

    if (typeof sampleActivity !== 'string' ||
        !parseFloat(sampleActivity) ||
        parseFloat(sampleActivity) <= 0 ||
        parseFloat(sampleActivity) > modernActivity) {
            return false;
        }
            return Math.ceil(Math.log(modernActivity / parseFloat(sampleActivity)) / rateReaction);
};
