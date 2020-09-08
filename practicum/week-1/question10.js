/*
Given an integer n, return difference between the maximum and the minimum of its digits.

Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    var nArray = (n.split()).sort();
    var min = nArray[0];
    var max = nArray[(nArray.length - 1)];
    var mmm = (max - min);
    return mmm;
};