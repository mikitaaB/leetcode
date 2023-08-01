/**
 * @param {string} str
 * @return {boolean}
 */
const isValid = (str) => {
    const dict = new Map([
        ["}", "{"],
        ["]", "["],
        [")", "("]
    ]);
    const stack = [];
    const strLength = str.length;
    for (let i = 0; i < strLength; i++) {
        if ([...dict.values()].indexOf(str[i]) > -1) {
            stack.push(str[i]);
        } else {
            if (stack[stack.length-1] !== dict.get(str[i])) {
                return false;
            }
            stack.pop();
        }
    }
    return !stack.length;
};