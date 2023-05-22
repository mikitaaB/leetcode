/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (list) {
	let resArr = [];
	let res = list.length ? `${list[0]}` : "";
	let isQuiee = false;
	const listLength = list.length;

	for (let i = 1; i <= listLength; i++) {
		const prevItem = list[i - 1];
		const item = list[i];

		if (item !== undefined && prevItem === item - 1) {
			if (res.length === 0) {
				res = `${prevItem}`;
			}
			isQuiee = true;
		} else {
			if (isQuiee) {
				res += `->${prevItem}`;
				isQuiee = false;
				resArr.push(res);
				res = "";
				continue;
			}
			res = "";
			resArr.push(`${prevItem}`);
		}
	}
	return resArr;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // ["0->2","4->5","7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); // ["0","2->4","6","8->9"]
