/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    //start a for loop to pick a value to count its repetitions
    for (i = 0; i < input.length; i++) {
        var count = 0;
        var compare = input[i];
        //start another loop to compare the selected value to all other values
        for (j = i; j < input.length; j++) {
            if (input[j] == compare) { 
                count += 1
            }
        }
        if (count > input.length/2) {
            return input[i];
        }
    }
    return -1
};

// let test6 = m_element([1, 2, 2, 3, 2, 7, 2]);
// console.log(test6)