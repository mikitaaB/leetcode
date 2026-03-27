/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    function toBe(val2) {
        if (val === val2) {
            return true;
        } else {
            throw new Error("Not Equal");
        }
    }
    function notToBe(val2) {
        if (val !== val2) {
            return true;
        } else {
            throw new Error("Equal");
        }
    }
    return { toBe, notToBe }
};

var expect2 = function (val) {
    const func = (s) => { throw new Error(`${s}Equal`) };

    return {
        toBe: (val2) => val === val2 ? true : func("Not "),
        notToBe: (val2) => val !== val2 ? true : func("")
    }
};


/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */