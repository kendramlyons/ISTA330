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
            if (i == 0 || i == 1 || j == 0) {
                result[i][j].push(1);
            }
            else {
                result[i][j].push((result[i-1][j-1]+result[i-1][j]));
            }
        }
    }
    return result;
};