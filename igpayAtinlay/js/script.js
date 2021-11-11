/*
 * Authors: Riley Mann
 * Created: 4 NOV 2021
 * License: Public Domain
 */

vowels = ['a', 'e', 'i', 'o', 'u'];
consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n',
              'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function anslatetray(txt) {
  //lowercase
  txt = txt.toLowerCase();
  var word = "";
  var output = "";

  //loop through every character
  for (var i = 0; i < txt.length; i++) {
    if (vowels.includes(txt[i]) || consonants.includes(txt[i])) { //letter
      word += txt[i];
    } else { //on a non-letter
      output += anslatetrayOrdway(word) + txt[i];
      word = "";
    }
  }
  output += anslatetrayOrdway(word); //final word

  return output;
}

//function that translates a string word into piglatin
function anslatetrayOrdway(word) {
  //return empty if empty
  if (!word.length) return "";

  var chars = word.split('');
  var head = [];
  var body = [];
  var finished_head = false;

  //sort the characters into sections
  for (var i = 0; i < chars.length; i++) {
    if (vowels.includes(chars[i])) finished_head = true;
    if (finished_head) body.push(chars[i]);
    else head.push(chars[i]);
  }

  //combine
  var output = body.join('') + head.join('');
  if (head.length) output += "ay";
  else output += "yay";

  //return the result
  return output;
}

// Attach an event listener to your button
$('#my-button').click(produceOutput);

function produceOutput() {
  // Gets the value of your input field
  var txt = $('#input').val();

  // Run that value through anslatetray()
  translated = anslatetray(txt);

  // Replaces the text in <p id=output> with the results.
  $('#output').text(translated);
}
