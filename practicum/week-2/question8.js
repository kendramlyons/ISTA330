/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    var dInts = [];
    for (i = 0; i < input.length; i++) {
        var compare = input[i];
        var count = 0; 
        for (j = i; j < input.length; j++) {
            if (input[j] == compare) {
                count += 1;
            }
        }
        if (count == compare) {
            dInts.push(compare);
        }
    }
    if (dInts.length > 0) {
        return Math.max(...dInts);
    }
    else {return -1};
};
let test8 = d_integer([3,6,3,9,6,45,86,9]);
console.log(test8)