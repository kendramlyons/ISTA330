/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
//define a variable to store a boolean 
    var answer; 
        //start a for loop to traverse the array from left to right
    for (i = 0; i < input.length; i++) {
        //start another loop to compare adjacent values 
        for (j = i+1; j < input.length; j++) {
            if (input[i] < input[j] || input[j] < input [i]) {
                answer = true;
            }
            else {
                answer = false;
            }
        }
    }
    return answer; 
};
test = isMonotonic([29,6,31,2,23,40]);

console.log(test);