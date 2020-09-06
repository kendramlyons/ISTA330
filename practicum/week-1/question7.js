/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
input: [1, 2, 3, 4, 5, 6, 7, 8]
*/

var maxSumOfMins = function(input) {
       var numPairs = input.length/2;
       var minsSum = 0;
       var ordArray = input.sort(); //sort array numerically
       for(i=0; i<ordArray.length; i+2) { //traverse array adding min values
              minsSum += ordArray[i];
       }
       return minsSum;
};