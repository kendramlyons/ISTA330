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
    // var i = unshuffled.length;
    // while (i<input.length) {
    //     if (shuffleIndices[i] == i) {
    //         unshuffled.push(input[i]);
    //         break;
    //     }
    //     i++;
    // }
    // return unshuffled;
*/

var suffleString = function(input, shuffleIndices) {
    var unshuffled = '';
    for (i=0; i<input.length; i++) {
        for (j=0; j<shuffleIndices.length; j++) {
            if (shuffleIndices[j] == i) {
                unshuffled += input[j];
            }
        }
    }
    return unshuffled; 
};