const isPalindrome = (x) => {
	if (x < 0) {
		return false;
	}
	let revertX = 0;
	let copyX = x;
	while (copyX) {
		revertX = (copyX % 10) + revertX * 10;
		copyX = (copyX / 10) | 0;
	}
	return x === revertX;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
