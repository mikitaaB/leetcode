/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
/**
 * Space: O(1)
 * Time: O(n)
 */
const reverseString = (s) => {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
/**
 * Space: O(1)
 * Time: O(n)
 */
const reverseString2 = (chars) => {
    let left = 0;
    let right = chars.length - 1;

    while (left < right) {
        chars[left] = String.fromCharCode(chars[left].charCodeAt(0) + chars[right].charCodeAt(0));
        chars[right] = String.fromCharCode(chars[left].charCodeAt(0) - chars[right].charCodeAt(0));
        chars[left] = String.fromCharCode(chars[left].charCodeAt(0) - chars[right].charCodeAt(0));
        left++;
        right--;
    }
};