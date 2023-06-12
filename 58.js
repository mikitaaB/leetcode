// First solution
const lengthOfLastWord = (s) => {
	s = s.trim();
	const strLength = s.length;
	const space = " ";
	if (s.indexOf(space) === -1) {
		return strLength;
	}
	for (let i = strLength - 1; i >= 0; i--) {
		if (s[i] === space) {
			return strLength - i - 1;
		}
	}
};

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6

// Second solution
const lengthOfLastWord_1 = (s) => s.trim().split(" ").at(-1).length;
