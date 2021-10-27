/*
 * Authors: Raymond Wong, Riley Mann
 * Created: 26 OCT 2021
 * License: Public Domain
 */

 // Create an array of numbers and assign it to a variable.
 var x = [4, 8, 15, 16, 23, 42];
 console.log("Original: ", x);

 // Create a named function that will take a single parameter, do a
 // calculation on it (sqrt, sqr, addition, etc), and return the
 // result.
 function lastDigit(x) {
   var results = x%10;
   return results;
 }

 // Use map on your array using your function as a callback to
 // operate on all the numbers in your array.
 var xMappedOne = x.map(lastDigit);
 console.log("Mapped w/ lastDigit: ", xMappedOne);

 // Now use a new anonymous function as a callback with map to do
 // some new operation on each of the numbers in your array.
 var xMappedTwo = x.map(function (x){
   var results = x/2;
   return results;
   });
 console.log("Mapped w/ AnonFunc: ", xMappedTwo);
