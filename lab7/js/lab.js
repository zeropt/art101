/*
 * Authors: Raymond Wong, Riley Mann
 * Created: 25 OCT 2021
 * License: Public Domain
 */

function sortUserName() {
   // In the function, declare a variable userName and use window.prompt() to
   // get the user's name from the user.
   var userName = window.prompt("Hi. Can enter your name here.");

   // Sort the letters of the user's name
   //Split the String - sort the array - convert back to string
   var nameArray = userName.split('');
   var nameArraySort = nameArray.sort();
   var nameSorted = nameArraySort.join('');

   // Make sure your function uses return to return the results.
   return nameSorted;
}

// output
document.writeln("Aye, I have fixed your name: ", sortUserName(), "</br>");
