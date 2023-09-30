// First solution

const isNotAlnum = (char) => char.match(/[^A-Za-z0-9]/);

/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * Complexity:
 * Space: O(1)
 * Time: O(n)
 */
const isPalindrome = (s) => {
	let left = 0;
	let right = s.length - 1;
	while (left < right) {
		while (left < right && isNotAlnum(s[left])) {
			left++;
		}
		while (right > left && isNotAlnum(s[right])) {
			right--;
		}
		if (s[left].toLowerCase() !== s[right].toLowerCase()) {
			return false;
		}
		left++;
		right--;
	}
	return true;
};

// Second solution

const reverseString = (str) => {
	let resStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		resStr += str[i];
	}
	return resStr;
};

/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * Complexity:
 * Space: O(n)
 * Time: O(n)
 */
const isPalindrome_2 = function (s) {
	const str = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
	return str === reverseString(str);
};

// Third solution

/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * Complexity:
 * Space: O(n)
 * Time: O(n)
 */
const isPalindrome_3 = (s) => {
	const str = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
	return str === str.split("").reverse().join("");
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true