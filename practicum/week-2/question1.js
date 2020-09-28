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
    var sorted_in = input.sort(function(a, b){return a-b});
    console.log(sorted_in);
    const biggest = sorted_in.pop();
    console.log(biggest);
    const next_big = sorted_in.pop();
    console.log(next_big);
    if ((biggest/2) >= next_big) {
        return true;
    }
    else {
        return false;
    }
}; 
test1 = largestNumberIsAtLeastTwice([3,2,26,50]);
console.log(test1);