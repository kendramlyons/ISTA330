/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
    var sorted_in = input.sort();
    const biggest = sorted_in.pop();
    const next_big = sorted_in.pop();
    if ((biggest/2) >= next_big) {
        return true;
    }
    else {
        return false;
    }
}; 