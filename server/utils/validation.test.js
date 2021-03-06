const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        let res = isRealString(98);
        expect(res).toBe(false);
    });

    it('should reject a string with only spaces', () => {
        let res = isRealString('     ');
        expect(res).toBe(false);
    });

    it('should allow a string containing that contains at least one non-space character', () => {
        let res = isRealString('    Z ');
        expect(res).toBe(true);
    })
});
