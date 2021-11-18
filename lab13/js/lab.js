/*
 * Authors: Raymond Wong, Riley Mann
 * Created: 17 NOV 2021
 * License: Public Domain
 */

// Create a string called oneLongString
var oneLongString= "";

// Loop through numbers 1 to 200
for (let i = 1; i <= 200; i++) {
  // create new output String
  let output = "";

  // If i is a multiple of 3 add "Fizz"
  if (i%3 == 0) output += "Fizz";
  // If i is a multiple of 5 add "Buzz"
  if (i%5 == 0) output += "Buzz";
  // If i is a multiple of 7 add "Boom"
  if (i%7 == 0) output += "Boom";

  // If output is not empty add exclamation
  if (output) output += "!";

  // Append the output
  oneLongString += i + " " + output + "<br>";
}

//Set the contents of <div id="output">
$("#output").html("<p>" + oneLongString);
