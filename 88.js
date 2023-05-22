/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
	while (n) {
		if (nums1[m - 1] > nums2[n - 1]) {
			nums1[m + n - 1] = nums1[m - 1];
			m--;
		} else {
			nums1[m + n - 1] = nums2[n - 1];
			n--;
		}
	}
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1, 2, 2, 3, 5, 6]
console.log(merge([1], 1, [], 0)); // [1]
console.log(merge([0], 0, [1], 1)); // [1]
