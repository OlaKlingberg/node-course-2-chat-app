var isRealString = (str) => {
    return typeof str === 'string'.trim() && str.trim().length > 0;
};

module.exports = {isRealString};