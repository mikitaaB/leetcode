/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
    const res = [];
    let left = 0;
    let right = n;
    while (left < n && right < nums.length) {
        res.push(nums[left]);
        res.push(nums[right]);
        right++;
        left++;
    }
    return res;
};