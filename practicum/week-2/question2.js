
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
    var big_sum;
    var running_sum;
    for(i=0; i<input.length; i++) {
        big_sum = input[i];
        for(j=1; j < input.length; j++) {
            running_sum = input[i] + input[j]
            if (running_sum > big_sum) {
                big_sum = running_sum;
            }
        }
    }
    return big_sum;
 };
