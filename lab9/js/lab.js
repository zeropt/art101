/*
 * Authors: Raymond Wong, Riley Mann
 * Created: 1 NOV 2021
 * License: Public Domain
 */

// Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("output");

// Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("p");

// Change the html attribute of new1El to say something new.
new1El.innerText = "This is the first element of our output!";

// Create another new element and assign it to a variable new2El
var new2El = document.createElement("p");

// Change the html attribute of new2El to say something else.
new2El.innerText = "This is the second element of our output!";

 // Append both new elements one at a time using appendChild() to your output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the css attributes of at least two elements of your page
document.getElementsByTagName("h2")[1].style.color = 'red';
document.getElementsByTagName("h1")[0].style.fontStyle = 'italic';
