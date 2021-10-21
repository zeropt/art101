/*
 * Authors: Raymond Wong, Riley Mann
 * Created: 20 OCT 2021
 * License: Public Domain
 */

//Declare all the variables you created in Task 1 in this JavaScript file

var myTransport = ["bike", "bus system", "walking", "car", "uber"];

var myMainRide = {
  make: "subaru",
  model: "forester",
  color: "Navy blue",
  year: "2019"
};

//Use document.writeln() to neatly output myTransport
//example, document.writeln("Getting around: " + myTransport + "<br>");

document.writeln("My ways to get around: " + myTransport);

document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
