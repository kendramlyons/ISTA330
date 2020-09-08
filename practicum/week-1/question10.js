/*
Given an integer n, return difference between the maximum and the minimum of its digits.

Example:
input: 472
output: 7 - 2 = 5

    var nArray = (n.toString().split('')).sort();
    var min = nArray[0];
    var max = nArray[(nArray.length - 1)];
    var mmm = (max - min);
    return mmm;
*/

var maxMinusMin = function(n) {
    var nArray = (n.toString().split('')).sort();
    var min = Number(nArray[0]);
    var max = Number(nArray[(nArray.length - 1)]);
    var mmm = (max - min);
    return mmm;
};