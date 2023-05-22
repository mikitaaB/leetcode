/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
	if (n <= 3) {
		return n;
	}
	let a = 1;
	let b = 2;
	for (let i = 3; i <= n; i++) {
		[a, b] = [b, a + b];
	}
	return b;
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
