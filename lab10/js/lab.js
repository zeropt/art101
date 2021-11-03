/*
 * Authors: Raymond Wong, Riley Mann
 * Created: 2 NOV 2021
 * License: Public Domain
 */

// Borrow the nameSort() function or my anagram() function from Lab 7.
function nameSort(userName) {
  // Sort the letters of the user's name
  //Split the String - sort the array - convert back to string
  var nameArray = userName.toLowerCase().split('');
  var nameArraySort = nameArray.sort();
  var nameSorted = nameArraySort.join('');

  // Make sure your function uses return to return the results.
  return nameSorted;
}

// Attach an event listener to your button that does the following:
document.getElementById("my-button").addEventListener("click", sortInput);

function sortInput() {
  // Gets the value of your input field
  var userName = document.getElementById("user-name").value;

  // Runs that value through your sort() or anagram() function and saves the results.
  sortedName = nameSort(userName);

  // Replaces the html in <div id=output> with the results.
  document.getElementById("output").innerHTML = "<p>Sorted!: " + sortedName + "</p>";
}
