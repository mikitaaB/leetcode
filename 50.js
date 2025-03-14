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
    if (n % 1 !== 0) {
        return myPow(mySqrt(x), n*2) / myPow(2, n*2);
    }
    if (n < 0) {
        return 1/myPow(x, -n);
    }
    let half = myPow(x, Math.floor(n / 2));
    return half * half * myPow(x, n % 2);
};

const mySqrt = (x) => {
    if (x === 0 || x === 1) {
        return x;
    }
    let left = 0;
    let right = Math.floor(x/2);
    while (left <= right) {
        const mid = Math.floor((left+right)/2);
        if (mid*mid === x) {
            return mid;
        }
        if (mid*mid < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};