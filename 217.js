/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    return new Set(nums).size !== nums.length;
};

var containsDuplicate2 = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
};

var containsDuplicate3 = function (nums) {
    const numsLength = nums.length;
    for (let i = 0; i < numsLength; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};