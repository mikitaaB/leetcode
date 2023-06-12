/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
	const maxValue = 2 ** 31;
	if (x <= (maxValue ^ 0) || x > maxValue - 1) {
		return 0;
	}
	let isNegative = false;
	if (x < 0) {
		isNegative = true;
		x *= -1;
	}
	let revertX = 0;
	while (x) {
		revertX = (x % 10) + revertX * 10;
		x = (x / 10) | 0;
		if (revertX < (maxValue ^ 0) || revertX > maxValue - 1) {
			return 0;
		}
	}
	return isNegative ? revertX * -1 : revertX;
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
