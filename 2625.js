/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const res = [];
    function flatArr(arr, n) {
        if (typeof arr === 'number') {
            res.push(arr);
        } else {
            if (n === 0) {
                for (let i = 0; i < arr.length; i++) {
                    res.push(arr[i]);
                }
            } else {
                for (let i = 0; i < arr.length; i++) {
                    flatArr(arr[i], n-1);
                }
            }
        }
    }
    flatArr(arr, n);
    return res;
};