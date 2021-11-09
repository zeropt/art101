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
  //Split text on spaces
  words = txt.split(' ');
  //loop through each word and translate
  for (var i = 0; i < words.length; i++) {
    var word = words[i].split('');
    //loop through each letter
    for (var j = 0; j < words[i].length; j++) {
      if (vowels.includes(word[j])) {
        console.log(words.substr(0,j));
        break;
      }
    }
  }
  return 'hello';
}

// Attach an event listener to your button that does the following:
document.getElementById("my-button").addEventListener("click", produceOutput);

function produceOutput() {
  // Gets the value of your input field
  var txt = document.getElementById("user-name").value;

  // Run that value through anslatetray()
  translated = anslatetray(txt);

  // Replaces the text in <p id=output> with the results.
  document.getElementById("output").innerText = translated;
}
