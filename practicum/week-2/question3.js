/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]

help from David Fimbres 
*/

var PascalTriangle = function(n) {
    // var result = new Array();
    // for (i = 0; i < n; i++) {
    //     result.push([]);
    //     for (j = 0; j < (n-1); j++) {
    //         if (j == 0 || i == 0 || i == 1) {
    //             result[i][j].push(num(1));
    //         }
    //         else {
    //             var pSum = result[i-1][j-1] + result[i-1][j];
    //             result[i][j].push(pSum);
    //         }
    //     }
    // }
    // return result;
};
// let test = PascalTriangle(2);
// console.log(test);