// First solution

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
const isPalindrome = function (s) {
	const str = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
	return str === reverseString(str);
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true

// Second solution

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome_1 = (s) => {
	const str = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
	return str === str.split("").reverse().join("");
};
