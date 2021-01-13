const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))

    if (letters.length === 0) {
        return "not searchable"
    }
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    const reverseHorizontal = [];
    for (h of horizontalJoin) {
        reverseHorizontal.push(h.split("").reverse().join(""));
    }

    for (rh of reverseHorizontal) {
        if (rh.includes(word)) {
            return true;
        }
    }

    const transpose = (matrix) => {

        let grid = [];
        let rowLength = matrix.length
        let columnLength = matrix[0].length
        for (let x = 0; x < columnLength; x++) {
            grid[x] = []
        }
        for (let y = 0; y < rowLength; y++) {
            for (let x = 0; x < columnLength; x++) {
                grid[x][y] = matrix[y][x]
            }
        }
        return grid;
    }

    let verticalArrayCheck = transpose(letters)

    const verticalCheck = verticalArrayCheck.map(vc => vc.join(''))

    for (v of verticalCheck) {
        if (v.includes(word)) {
            return true;
        }
    }

    const reverseVertical = [];

    for (vw of verticalCheck) {
        reverseVertical.push(vw.split("").reverse().join(""));
    }

    for (rv of reverseVertical) {
        if (rv.includes(word)) {
            return true;
        }
    }

    const diagonalArray = []

    let count = 0;

    let horizontalLength = letters.length
    let verticalLength = letters[0].length

    let diagonalWord = "";
    for (let i = 0; i < horizontalLength; i++) {
        for (let j = 0; j < letters.length; j++) {
            for (let k = 0; k < letters[j].length; k++) {
                if (j === k + count) {
                    diagonalWord += letters[j][k]

                    // console.log(diagonalWord);
                }
            }

        }
        diagonalArray.push(diagonalWord);
        diagonalWord = "";
        // console.log(diagonalArray)
        count++;
    }

    count = 1;

    let diagonalWordTwo = "";
    for (let i = 0; i < verticalLength - 1; i++) {
        for (let j = 0; j < letters.length; j++) {
            for (let k = 1; k < letters[j].length; k++) {
                if (j + count === k) {
                    diagonalWordTwo += letters[j][k]

                    // console.log(diagonalWord);
                }
            }

        }
        diagonalArray.push(diagonalWordTwo);
        diagonalWordTwo = "";
        count++;
    }

    for (let d of diagonalArray) {
        if (d.includes(word)) {
            return true
        }
    }
    return false;
}


module.exports = wordSearch