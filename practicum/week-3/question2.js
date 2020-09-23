
/*
Given an array of integers, 
some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Example: input: [19,3,2,10,8,2,3,5]
         output: [2,3]
                
          */

 var findDuplicates = function(input) {
    var duplicates = [];
    for (i = 0; i < input.length; i++) {
        let compare = input[i];
        let count = 0;
        for (j = 0; j < input.length; j++) {
            if (compare == input[j]) {
                count += 1;
            }
        }
        if (count == 2 && !duplicates.includes(compare)) {
            duplicates.push(compare);
        }
    }
    return duplicates;
    
 };
test2 = findDuplicates(-17,3,1,5,-9,1,10);
console.log(test2);
