/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
	let res = "";
	let [ones = 0, tens = 0, hundreds = 0, thousands = 0] = reverseNum(num);

	let arr = [thousands, hundreds, tens, ones];
	let aRomNum = [
		["", "", "", "M"],
		["CM", "CD", "D", "C"],
		["XC", "XL", "L", "X"],
		["IX", "IV", "V", "I"],
	];
	for (let i = 0; i < aRomNum.length; i++) {
		if (arr[i]) {
			res += convert(arr[i], aRomNum[i]);
		}
	}

	return res;
};

const convert = (num, arrRomNum) => {
	let resNum = "";
	if (num === 9) {
		resNum = arrRomNum[0];
	}
	if (num === 4) {
		resNum = arrRomNum[1];
	}
	if (new Set([5, 6, 7, 8]).has(num)) {
		resNum = arrRomNum[2];
	}
	if (new Set([1, 2, 3, 6, 7, 8]).has(num)) {
		for (let i = 0; i < num % 5; i++) {
			resNum += arrRomNum[3];
		}
	}
	return resNum;
};

const reverseNum = (num) => {
	let revNum = [];
	while (num) {
		revNum.push(num % 10);
		num = (num / 10) | 0;
	}
	return revNum;
};

console.log(intToRoman(3)); // "III"
console.log(intToRoman(58)); // "LVIII"
console.log(intToRoman(1994)); // "MCMXCIV"
