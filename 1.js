/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	for (let i = 0; i < nums.length; i++) {
		const iDiff = target - nums[i];
		if (nums.includes(iDiff) && nums.indexOf(iDiff) !== i) {
			return [i, nums.indexOf(iDiff)];
		}
	}
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
