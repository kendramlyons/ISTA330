/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function(M) {
    newM = [];
    for (i = 0; i < M[0].length; i++) {
        let newRow = [];
        for (j = 0; j < M.length; j++) {
            newRow.push(M[j][i]);
        }
        newM.push(newRow);
    }
    return newM;
};
test7 = transpose([[1,2,3],[4,5,6]]); 
console.log(test7);