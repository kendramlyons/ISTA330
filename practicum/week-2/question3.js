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

        if (n = 1) {
            result.push([1]);
        } else if (n = 2) {
            result.push([1],[1,1]);
        } else if (n > 2) {
            result.push([1],[1,1]);
            for ( j = 0; j < (n - 2); j++) {
                var numRows = n - 2; 
                var rows = [] * numRows;
                result.concat(rows)
            }
        }

help from David Fimbres 
*/

var PascalTriangle = function(n) {
    var result = []
    for (i = 0; i < n; i++) {
        result.push([]);
        for (j = 0; j < (i + 1); j++) {
            if (j == 0 || i == 0 || i == 1) {
                result[i][j].push(1);
            }
            else {
                var pSum = num(result[i-1][j-1]) + num(result[i-1][j])
                result[i][j].push(pSum);
            }
        }
    }
    return result;
};