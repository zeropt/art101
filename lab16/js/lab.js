/*
 * Authors: Raymond Wong, Riley Mann
 * Created: 23 NOV 2021
 * License: Public Domain
 */

// Using jQuery, do the following:
// Add a click event to the button
// When a user clicks the button, use a jQuery AJAX call to fetch output from your API

//Url of the lates comic
let currentComic = "https://xkcd.com/info.0.json";

//Url of a comic at index i
function comicUrl(i) {return "https://xkcd.com/" + i + "/info.0.json"}

$("#activate").click(produceRandomXkcd);

function produceRandomXkcd() {
  $.ajax({
    // The URL for the request (from the api docs)
    url: currentComic,
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
        //get the current index
        let current_i = data.num;
        //produce a random index from 1 to current_i
        let i = Math.floor(Math.random() * current_i) + 1;
        //grab the random comic
        grabXkcd(i);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
  });
}

function grabXkcd(i) {
  $.ajax({
    // The URL for the request (from the api docs)
    url: comicUrl(i),
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
        //clear the div
        let ourDiv = $("#output");
        ourDiv.html("");
        //Append the image
        ourDiv.append("<p><b>" + data.title);
        ourDiv.append("<img src=" + data.img + ' title="' + data.alt + '">');
        //ourDiv.append("<p>" + data.alt);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
  });
}
