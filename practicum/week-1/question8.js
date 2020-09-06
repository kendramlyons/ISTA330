/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/
var evenAndBigger = [];
var biggerAndEven = function(input) {
    for(i=0; i<input.length; i++) {    
        for(j=0; j<input.length; j++){
            let howMany = 0;
            if(input[i] < input[j] && input[j]%2==0){
                howMany+=1;
            }
        }
        evenAndBigger.push(howMany);
    }
    return evenAndBigger;
};