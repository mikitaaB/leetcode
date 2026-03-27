/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    const res = [];
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        res.push(fn(arr[i], i));
    }
    return res;
};