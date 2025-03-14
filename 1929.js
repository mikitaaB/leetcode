/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = function(nums) {
    const res = [];
    const numsLength = nums.length;
    for (let i = 0; i < numsLength*2; i++) {
        if (i >= numsLength) {
            res.push(nums[i % numsLength])
            continue;
        }
        res.push(nums[i]);
    }
    return res;
};