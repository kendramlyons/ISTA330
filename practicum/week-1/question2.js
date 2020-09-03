
/*
The array cookies represent the number of cookies that each kid has. 
Given the array cookies and an integer extraCookies, determine whether there is a
way to distribute the extraCookies among the kids in a way that kids get equal number of cookies.
Example: input: cookies = [3, 5, 8] , extraCookies = 8
         output: true
         Because we can give 5 of the extraCookies to the first kid and the remaining 3 to the second kid
         and therfore each of the three kids will get 8 cookies.
 */

 var canGetEqualCookies = function(cookies, extraCookies) {
    //add all values in cookies to extraCookies, then divide by length and check if the remainder is 0
    var totalCookies = 0 
    for(i=0; i<cookies.length; i++){
        totalCookies+cookies[i]
        }
    if totalCookies%cookies.length === 0{
        return true
        }
    return false 
 };
