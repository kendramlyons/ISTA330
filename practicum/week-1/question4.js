/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
    var repeats = 0;
    for(i=0; i<A.length; i++){
        for(j=0; j<B.length; j++){
            if(A[i]==B[j]){
                repeats+=1;
            }
        }
    }
    return repeats
};