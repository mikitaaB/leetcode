/*
    Write a function sostavChisla(initCandidates: number[], targetNum: number),
    which would find all possible combinations of numbers from initCandidates, whose sum is equal to targetNum. At the same time:

    1) initCandidates contains only unique positive numbers (> 0)
    2) there should be no duplicates of numbers in the combination
    3) all combinations should be unique

    To check the functionality of the function, run runTests()

    @param initCandidates: number[]
    @param targetNum: number[]
    @return Array<Array<number>>
*/
function getCombinations(initCandidates, targetNum) {
	const res = [];
	const arrayNum = initCandidates
		.filter((num) => num <= targetNum)
		.sort((a, b) => a - b);

	function getCombo(arrayNum, targetNum, combo = []) {
		if (targetNum <= 0) {
			if (targetNum === 0) {
				res.push(combo);
			}
			return;
		}
		for (let i = 0; i < arrayNum.length; i++) {
			getCombo(arrayNum.slice(i + 1), targetNum - arrayNum[i], [
				...combo,
				arrayNum[i],
			]);
		}
	}
	getCombo(arrayNum, targetNum, []);

	return res;
}

console.log(getCombinations([8, 2, 3, 4, 6, 7, 1], 10));

function compareNumericArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	arr1 = [...arr1].sort();
	arr2 = [...arr2].sort();

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
}

function compareArraysOfNumericArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let el1 of arr1) {
		if (arr2.findIndex((el2) => compareNumericArrays(el1, el2)) < 0) {
			return false;
		}
	}

	return true;
}

runTests();

function runTests() {
	const tests = [
		{
			chislo: 5,
			massivChisel: [8, 2, 3, 4, 6, 7, 1],
			result: [
				[2, 3],
				[4, 1],
			],
		},
		{
			chislo: 99,
			massivChisel: [8, 2, 3, 4, 6, 7, 1],
			result: [],
		},
		{
			chislo: 8,
			massivChisel: [1, 2, 3, 4, 5, 6, 7, 8],
			result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]],
		},
		{
			chislo: 8,
			massivChisel: [7, 8, 3, 4, 5, 6, 1, 2],
			result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]],
		},
		{
			chislo: 15,
			massivChisel: [7, 8, 3, 4, 5, 6, 1, 2],
			result: [
				[1, 2, 3, 4, 5],
				[2, 3, 4, 6],
				[1, 3, 5, 6],
				[4, 5, 6],
				[1, 3, 4, 7],
				[1, 2, 5, 7],
				[3, 5, 7],
				[2, 6, 7],
				[1, 2, 4, 8],
				[3, 4, 8],
				[2, 5, 8],
				[1, 6, 8],
				[7, 8],
			],
		},
	];

	let errors = 0;
	for (const test of tests) {
		let result;
		try {
			result = getCombinations(test.massivChisel, test.chislo);

			if (!compareArraysOfNumericArrays(result, test.result)) {
				errors++;
				console.log("--------------------------------------------");
				console.log("failed for test", test, "Got result", result);
			}
		} catch (e) {
			errors++;
			console.log("failed for", test, "exception", e.message);
		}
	}

	if (errors === 0) {
		console.log("checkStringForBracects test successfuly completed");
	} else {
		console.log(`checkStringForBracects test failed with ${errors} errors`);
	}
}
