/*
    Given a list of integers, there are no repeating elements in the list.
    You need to transform this set into a string,
    collapsing adjacent numbers in the numerical series into ranges.
*/

const compress = (list) => {
	list.sort((a, b) => a - b);
	let res = list.length ? `${list[0]}` : "";
	let isQuiee = false;
	const listLength = list.length;

	for (let i = 1; i <= listLength; i++) {
		const prevItem = list[i - 1];
		const item = list[i];

		if (item !== undefined && prevItem === item - 1) {
			isQuiee = true;
		} else {
			if (isQuiee) {
				res += `-${prevItem}`;
				isQuiee = false;
			}
			if (item) {
				res += `,${item}`;
			}
		}
	}
	return res;
};

console.log(compress([0, 1, 2, 3, 4, 5, 8, 9, 11])); // '0-5,8-9,11'
console.log(compress([1, 4, 3, 2])); // '1-4'
console.log(compress([1, 4])); // '1,4'
console.log(compress([1, 2])); // '1-2'
console.log(compress([1, 4, 3, 2, 6, 7])); // '1-4,6-7'
