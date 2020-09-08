/*
We have a *shuffled* string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'
    // var sortIndices = shuffleIndices.sort();
    // var chArray = [];        
    // chArray.push(input[shuffleIndices[i]]);
    // for(i=0; i<chArray.length; i++) {
*/

var suffleString = function(input, shuffleIndices) {
    var unshuffled = '';
    var i = unshuffled.length;
    while (i<input.length) {
        if (shuffleIndices[i] == i) {
            unshuffled.concat(input[i]);
            break;
        }
        i++;
    }
    return unshuffled;
};