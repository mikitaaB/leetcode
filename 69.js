// First solution

/**
 * @param {number} x
 * @return {number}
 */

const mySqrt = (x) => {
    const e = 0.0000001;
    let z = 1;
    let new_z;
    while (true) {
        new_z = z - (z*z - x) / (2 * z);
        if (Math.abs(z - new_z) < e) {
            break;
        }
        z = new_z;
    }
    return z|0;
};


// Second solution

const mySqrt_2 = (x) => {
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