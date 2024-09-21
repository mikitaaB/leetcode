/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * Complexity:
 * Space: O(n)
 * Time: O(n)
 */
const twoSum = (nums, target) => {
	const numsMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		const iDiff = target - nums[i];
		if (numsMap.has(iDiff)) {
			return [numsMap.get(iDiff), i];
		}
		numsMap.set(nums[i], i);
	}
	return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
