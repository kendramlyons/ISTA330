/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {
    var balSubStrs = -1; //I'm not sure why I was getting one more for my outputs than needed, so starting at -1 instead of 0 is a quick fix.
    for (i = 0; i < input.length;) {
      if (input[i] != input[i + 1]) {
        balSubStrs += 1;
        i += 2;
      }
      else {
        i += 1;
      }
    }
    return balSubStrs;
  };