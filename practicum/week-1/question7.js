/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

var maxSumOfMins = function(input) {
       // var numPairs = input.length/2;
       var minsSum = 0;
       var ordArray = input.sort();
       // var min = input.min()
       // var max = input.max()
       var minsArray = [];
       for(i=0; i<input.length; i+2) {
              minsArray.push(ordArray[i]);
              minsSum += ordArray[i];
       }
       return minsSum;
              // ordArray[i] //starts at min 
              // 'Pair '+String(i)+': '
              // for(j=0; j<B.length; j++){
              // }

};