/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2 ()
The 9 groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.

if 1 < n <= 9 total groups = n 
if 9 < n <= 18 total groups = 9
if 18 < n <= 28 total groups = 10 
if 28 < n <= 38 total groups = 11
input: n = 19
    total groups: 10 

input: n = 24
    total groups: 10
output: 5
[1, 10], [2, 11, 20], [3, 12, 21], [4,13,22], [5,14,23], [6,15,24], [7,16], [8,17], [9,18] [19]

input: n = 28
    total groups: 10
output: 8 
[1, 10], [2, 11, 20,], [3, 12, 21, 30], [4,13,22], [5,14,23], [6,15,24], [7,16,25], [8,17,26], [9,18,27] [19,28] [29]

input n = 29-30
total groups: 11
*/

var largestGroupsCount = function(n) {
    var goGs = [];
    for (var i = 1; i <= n; i++) {
        if (i <= 9) {
            var newGroup = [i];
            goGs.push(newGroup);
        }
        else {
            var addDigits = i.toString();
            addDigits = Number(addDigits[0]) + Number(addDigits[1]);
            for (j = 0; j < goGs.length; j++) {
                if (goGs[j][0] == addDigits) {
                    goGs[j].push(i);
                }
            }

        }
    }
    return goGs;
};
test9 = largestGroupsCount(28);
console.log(test9);