// First solution

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * Complexity:
 * Space: O(n)
 * Time: O(n)
 */
const singleNumber = function(nums) {
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = obj[nums[i]] !== undefined ? (obj[nums[i]] + 1) : 1;
    }

    const pairs = Object.entries(obj);
    for (let i = 0; i < pairs.length; i++) {
        if (pairs[i][1] === 1) {
            return pairs[i][0];
        }
    }
};


// Second solution

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * Complexity:
 * Space: O(n)
 * Time: O(n)
 */
const singleNumber2 = function(nums) {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            set.delete(num);
        } else {
            set.add(num);
        }
    }

    return set.values().next().value;
};


//Third solution

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * Complexity:
 * Space: O(1)
 * Time: O(n)
 */
const singleNumber3 = function(nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i];
    }
    return res;
};


// Fourth soution

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * Complexity:
 * Space: O(n)
 * Time: O(n)
 */
const singleNumber4 = function(nums) {
    const uniqueSum = new Set(nums);

    let sumUnique = 0;
    let sumAll = 0;

    for (let num of uniqueSum) {
        sumUnique += num;
    }

    for (let num of nums) {
        sumAll += num;
    }

    return 2 * sumUnique - sumAll;
};