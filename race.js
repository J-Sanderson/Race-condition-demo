$(document).ready(function() {
  
  function displayQuote(data, series) {
    if (series == "Blackadder") {
      $("body").removeClass().addClass("black");
    } else {
      $("body").removeClass().addClass("green");
    }
    console.log(series);
    data = data.split('<dl>').slice(1, data.length);
    var q = data[Math.floor(Math.random() * data.length)].split('</dl>');
    $("#results").empty().append(q[0]);
  }

  $("#start").click(function() {
    var firstQuote = false;
    var secondQuote = false;
    
    $.getJSON("https://en.wikiquote.org/w/api.php?format=json&action=parse&page=Blackadder&prop=text&callback=?", function(json) {
      if (!secondQuote) {
        firstQuote = true;
        displayQuote(json.parse.text["*"], json.parse.title);
      }
    });
    
    $.getJSON("https://en.wikiquote.org/w/api.php?format=json&action=parse&page=Father_Ted&prop=text&callback=?", function(json) {
      if (!firstQuote) {
        secondQuote = true;
        displayQuote(json.parse.text["*"], json.parse.title);
      }
    });
    
  });
  
   $('#about').click(function() {
    $('#aboutbox').show();
  });
  
  $('#aboutclose').click(function() {
    $('#aboutbox').hide();
  });
  
});