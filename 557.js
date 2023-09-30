/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
    const wordsChars = s.split("");
    let left = 0;
    let right = 0;
    while (right < wordsChars.length) {
        if (wordsChars[right] === " ") {
            reverseSingleWord(wordsChars, left, right-1);
            left = right + 1;
        }
        right++;
    }
    reverseSingleWord(wordsChars, left, right-1);
    return wordsChars.join("");
};

const reverseSingleWord = (wordsChars, left, right) => {
    while (left < right) {
        [wordsChars[left], wordsChars[right]] = 
            [wordsChars[right], wordsChars[left]];
        left++;
        right--;
    }
};


/**
 * @param {string} s
 * @return {string}
 */
const reverseWords2 = (s) => {
    const words = s.split(" ");
    for (let i = 0; i < words.length; i++) {
        const word = words[i].split("");
        let left = 0;
        let right = word.length - 1;
        while (left < right) {
            [word[left], word[right]] = [word[right], word[left]];
            left++;
            right--;
        }
        words[i] = word.join("");
    }
    return words.join(" ");
};