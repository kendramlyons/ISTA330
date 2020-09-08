/*
We have a *shuffled* string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
    var unshuffled = '';
    for (i=0; i<input.length; i++) {
        for (j=0; i<input.length; j++) {
            if (shuffleIndices[j] = i) {
                unshuffled += input[j];
            }
        }
    }
    return unshuffled; 
};