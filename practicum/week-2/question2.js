
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
 running_sum += input[i]
        for(j=0; j < (input.length); j++) {
            running_sum += input[j]

            else {
                break
            }
        }
          */
var largestSubarray = function(input) {
    var big_sum = 0;
    var running_sum = 0;
    for(i=0; i<input.length; i++) {
        big_sum += input[i];
        running_sum += input[i]
        for(j=1; j<(input.length-1); j++) {
            running_sum += input[j]
            if (running_sum > big_sum) {
                big_sum = running_sum;
            }
            else {
                break
            }
        }
    }
    return big_sum;
 };

