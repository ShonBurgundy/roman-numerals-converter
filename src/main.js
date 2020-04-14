//UI
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    $('#output').text(convertToRoman(userInput));
    console.log(result)
  });
});