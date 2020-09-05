/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    //test for odd length SUCCESS
    if (input.length % 2 == 1) {
        var medIndex = (input.length - 1)/2; // (7-1)/2 = 3
        return input[medIndex];
    }
    //test for even length
    else if (input.length % 2 == 0) {
        var mp1 = (input.length / 2) - 1;
        var mp2 = (input.length / 2);
        var medValue = (input[mp1] + input[mp2]) / 2;
        return medValue;
    }
};