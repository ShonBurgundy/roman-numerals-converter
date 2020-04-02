//Business Interface
var convertToRoman = function(num) { //function will convert roman numerals
  var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  var result = "";

  for (var i = 0; i < decimal.length; i++) { //run through array by +1 till end of array
    while (decimal[i] <= num) { //decimal[0]=1000 which is not <= 10
      result += romanNumeral[i];
      num -= decimal[i];
    }
  }
  return result;
};

//console.log();

//UI
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    $('#output').text(convertToRoman(userInput));
    console.log(result)
  });
});