/*
 * Authors: Raymond Wong, Riley Mann
 * Created: 8 NOV 2021
 * License: Public Domain
 */

// Using jQuery, create buttons to add to the challenge, problems, and results
// sections of your document
// 1 Find the section you want to add the button to
// 2 Create the button
// 3 Give it a text label
// 4 Add it to the section
$("#challenge").append('<button>Challenge Button');
$("#problems").append('<button>Problems Button');
$("#results").append('<button>Results Button');

// Using jQuery, do the following for each button:
// 1 Add a click event to each button
// 2 Find the challenge, problems, or results section the button is in.
// 3 Toggle a class "special" within the <div> of the section
$("#challenge button").click(function() {
  $("#challenge button").parent().toggleClass('special');
});

$("#problems button").click(function() {
  $("#problems button").parent().toggleClass('special');
});

$("#results button").click(function() {
  $("#results button").parent().toggleClass('special');
});
