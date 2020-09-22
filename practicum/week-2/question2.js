
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.

Help from Hamid Bahramian
*/
var largestSubarray = function(input) {
    var big_sum = input[0];
    var running_sum = 0;
    for ( i = 0; i < input.length; i++) {
        running_sum = input[i];
        for( j=(i+1); j < input.length; j++) {
            running_sum += input[j];
            if (running_sum > big_sum) {
                big_sum = running_sum;
            }
        }
        if (running_sum > big_sum) {
            big_sum = running_sum;
        }
    }
    return big_sum;
 };

// let test2 = largestSubarray([-17,3,1,5,-9,-1,10]);
// console.log(test2);