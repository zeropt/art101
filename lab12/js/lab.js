/*
 * Authors: Raymond Wong, Riley Mann
 * Created: 15 NOV 2021
 * License: Public Domain
 */

// Create a function sorter()
// that takes a string as an argument: function sorter(str)
function bendingElement(str) {
  // counts the letters in str and assigns it to a variable length
  let len = str.length;
  let theAvatar = "aang";
  if (str.toLowerCase() == theAvatar) {
    return "ALL THE ELEMENTS!"
  }

  // uses modulus (% operator) to get the remainder with 5: mod = length % 5;
  let mod = len % 5;

  // mod will now be a value between 0 and 4
  // create a conditional that will return Water, Earth, Fire, Air, Boomerang
  // depending on whether the value of mod is 0, 1, 2, 3 or 4
  if (mod == 0) {
    return "Water";
  } else if (mod == 1) {
    return "Earth";
  } else if (mod == 2) {
    return "Fire";
  } else if (mod == 3) {
    return "Air";
  } else if (mod == 4) {
    return "Boomerang";
  }
}

// Create an click listener attached to #button
let button = $("#button");
button.click(function() {
  // that gets the value of #input and assigns it to a variable name
  var name = $("#input").val();

  // runs sortingHat(name) and stores the result in a variable house
  let element = bendingElement(name);

  // appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
  $("#output").text("You can bend " + element + "!");
})
