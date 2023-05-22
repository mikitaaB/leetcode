/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
	const haystackLength = haystack.length;
	const needleLength = needle.length;
	const maxLoopLimit = haystackLength - needleLength + 1;
	for (let i = 0; i < maxLoopLimit; i++) {
		if (haystack[i] === needle[0]) {
			if (needle === haystack.substring(i, i + needleLength)) {
				return i;
			}
		}
	}
	return -1;
};
