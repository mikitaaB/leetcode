/**
 * @param {string} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// First solution
const gameOfLife = function(str) {
    const newGenCellValues = {
        "0": "0",
        "1": "0",
        "2": "1",
        "3": "1",
        "4": "0",
        "5": "0",
        "6": "0",
        "7": "0",
        "8": "0"
    }
    const arr = str.split("_");
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const neighbours = [
                arr?.[i-1]?.[j], arr?.[i-1]?.[j+1], arr?.[i-1]?.[j-1],
                arr?.[i]?.[j+1], arr?.[i]?.[j-1],
                arr?.[i+1]?.[j], arr?.[i+1]?.[j-1], arr?.[i+1]?.[j+1]
            ];
            const liveNeighboursCount = neighbours.filter((n) => n === "1").length;
            if (arr[i][j] === "1" || liveNeighboursCount === 3) {
                res += newGenCellValues[liveNeighboursCount];
                continue;
            }
            res += arr[i][j];
        }
        if (i !== arr.length - 1) {
            res += "_";
        }
    }
    return res;
};


// Second solution
const gameOfLife2 = function(str) {
    const newGenCellValues = {
        "0": "0",
        "1": "0",
        "2": "1",
        "3": "1",
        "4": "0",
        "5": "0",
        "6": "0",
        "7": "0",
        "8": "0"
    }
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1],  [1, 0],  [1, 1]
    ];
    const countLiveNeighbors = (row, col) => {
        let count = 0;
        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;
            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n) {
                count += +arr[newRow][newCol];
            }
        }
        return count;
    };

    const arr = str.split("_");
    const m = arr.length;
    const n = arr[0].length;
    let res = "";
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const liveNeighboursCount = countLiveNeighbors(i, j);
            if (arr[i][j] === "1" || liveNeighboursCount === 3) {
                res += newGenCellValues[liveNeighboursCount];
                continue;
            }
            res += arr[i][j];
        }
        if (i !== arr.length - 1) {
            res += "_";
        }
    }
    return res;
};

console.log(gameOfLife2("000_111_000")); // "010_010_010"
console.log(gameOfLife2("11")); // "00"