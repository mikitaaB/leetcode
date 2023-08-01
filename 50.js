/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return x;
    }
    if (n < 0) {
        return 1/myPow(x, -n);
    }
    return x * myPow(x, n-1);
};