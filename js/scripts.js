//Business Interface
var convertToRoman = function(num) { //function will convert roman numerals
  var romanNumeral = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  var decimal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

  var result = "";

  for (var i = 0; i < decimal.length; i++) {
    while (decimal[i] <= num) {
    }
  }
}

// if (!num.match(/[0-9]/g)) {
//   return "These are not numbers.";

  
//console.log();

//UI
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    //var result = convertToRoman(num);
    $('#output').text(convertToRoman(result));
    console.log(result)
  });
});