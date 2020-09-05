/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    if (input.length % 2 == 1) {
        var medIndex = input.length - (input.length - 1)/2; 
        return input[medIndex];
    }
    else if (input.length % 2 == 0) {
        var mp1 = input.length/2; // 6/2 = 3
        var mp2 = mp1 + 1; // 3+1 = 4
        var medValue = (input[mp1]+input[mp2])/2
        return medValue
    }

    // for (i=0; i<input.length; i++) {
    //     if
    // }
};