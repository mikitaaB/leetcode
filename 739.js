/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

/**
 * Complexity:
 * Space: O(n)
 * Time: O(n)
 */
const dailyTemperatures = (temperatures) => {
    const stack = [];
    const res = [];
    const tempLength = temperatures.length;
    for (let i = tempLength - 1; i >= 0; i--) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
            stack.pop();
        }
        const countLess = stack.length > 0 ? stack[stack.length - 1] - i : 0;
        res.unshift(countLess);
        stack.push(i);
    }
    return res;
};

/**
 * Complexity:
 * Space: O(n)
 * Time: O(n^2)
 */
const dailyTemperatures2 = (temperatures) => {
    const res = [];
    const tempLength = temperatures.length;
    for (let i = 0; i < tempLength; i++) {
        const checkTemp = temperatures[i];
        let countLessTemp = 1;
        let j = i+1;
        if (j === tempLength) {
            res.push(0);
            continue;
        }
        while (temperatures[j] <= checkTemp && j < tempLength) {
            j++;
            countLessTemp++;
            if (j === tempLength) {
                countLessTemp = 0;
                break;
            }
        }
        res.push(countLessTemp);
    }
    return res;
};


console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60])); // [1,1,1,0]
console.log(dailyTemperatures([30,60,90])); // [1,1,0]