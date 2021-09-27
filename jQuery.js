

$("#target-button").on(click, function() {
    alert("handler for .click() called.");
});

$( "#other" ).on(click, function() {
  $( "#target" ).trigger("click");
});