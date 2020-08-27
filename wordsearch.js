const transpose = function(matrix) {
    let newMatrix = [];

    for (let i = 0; i < matrix[0].length; i++){
        newMatrix[i] = [];
        for (let j = 0; j < matrix.length; j++) { 
        newMatrix[i][j] = matrix[j][i];
        }
    } 
    return newMatrix;
}

const wordSearch = (letters, word) => { 
    if (!Array.isArray(letters) || letters.length === 0) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    const verticalArray = transpose(letters);
    const verticalJoin = verticalArray.map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    // const backwardsArray = transpose(letters);
    // const backwardsJoin = verticalArray.map(ls => ls.reverse().join(''));
    return false;

}

module.exports = wordSearch