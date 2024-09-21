/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * Complexity:
 * Space: O(n)
 * Time: O(n)
 */
const sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let count = nums.length - 1;
    const res = [];

    while (left <= right) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            res[count] = nums[right] * nums[right];
            count--;
            right--;
        } else {
            res[count] = nums[left] * nums[left];
            left++;
            count--;
        }
    }
    return res;
};