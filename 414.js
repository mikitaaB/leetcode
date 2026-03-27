/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = (nums) => {
    nums.sort((a, b) => b - a);
    nums = [...new Set(nums)];
    if (nums.length < 3) {
        return nums[0];
    }
    return nums[2];
};