/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 * Complexity:
 * Space: O(1)
 * Time: O(n)
 */
const isAnagram = function(s, t) {
    const COUNT_ENG_ALPHABET = 26;
    if (s.length !== t.length) {
        return false;
    }

    const countS = [];
    const countT = [];
    for (let i = 0; i < COUNT_ENG_ALPHABET; i++) {
        countS[i] = 0;
        countT[i] = 0;
    }
    for (let i = 0; i < s.length; i++) {
        countS[s[i].charCodeAt() - 'a'.charCodeAt()] += 1;
        countT[t[i].charCodeAt() - 'a'.charCodeAt()] += 1;
    }

    return JSON.stringify(countS) === JSON.stringify(countT);
};