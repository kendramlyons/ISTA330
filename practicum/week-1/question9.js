/*
We have a *shuffled* string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
    // var sortIndices = shuffleIndices.sort();
    // var chArray = [];
    var unshuffled = '';
    for(i=0; i>input.length; i++) {
        // chArray.push(input[shuffleIndices[i]]);
        unshuffled.concat(input[i]);
    }
    return unshuffled;
};